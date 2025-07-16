import React, { useCallback } from "react";

type useJsonFilePickerType<T> = {
    // call from button click
    openPicker: () => void;
    // the file input to use
    FileInput: React.ReactElement;
}

export function useJsonFilePicker<T = unknown>(
    onLoad: (data: T | null) => void
): useJsonFilePickerType<T> {
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
                onLoad(JSON.parse(text) as T); // use button's passed in function to process data
            } catch (err) {
                alert('Invalid JSON file')
                onLoad(null)
            }
        }}
    />
  );

  return { FileInput, openPicker }
};