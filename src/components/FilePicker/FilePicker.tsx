import { guessStatesSchema } from "@components/ContextProviders/GuessStatesContext";
import React, { useCallback } from "react";

type useJsonFilePickerType = {
    // call from button click
    openPicker: () => void;
    // the file input to use
    FileInput: React.ReactElement;
}

export function useJsonFilePicker<T = unknown>(onLoad: (data: T | null) => void): useJsonFilePickerType {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  
  const openPicker = useCallback(() => {
    if (inputRef.current) {
        inputRef.current.value = ''; // let same file be choosen twice
        inputRef.current.click();
    }
  }, []);

  const FileInput = (
    <input 
        ref={inputRef}
        type="file"
        accept=".json,application/json"
        style={{ display: 'none' }}
        onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return; // if user cancelled
            const text = await file.text();
            try {
                const parsed = JSON.parse(text) as T;
                const result = guessStatesSchema.safeParse(parsed);
                console.log(guessStatesSchema.strict);
                if (result.success) {
                    onLoad(result.data as T); // use button's passed in function to process data
                } else {
                    onLoad(null); // json file doesn't match schema
                }
            } catch(err) {
                onLoad(null); // json failed to parse
            }
        }}
    />
  );

  return { FileInput, openPicker }
};