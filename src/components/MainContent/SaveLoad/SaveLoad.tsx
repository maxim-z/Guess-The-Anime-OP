import { useJsonFilePicker } from '@components/FilePicker/FilePicker';
import './SaveLoad.css'
import { useGuessStatesContext, type GuessStatesMap } from '@components/ContextProviders/GuessStatesContext';
import { useState } from 'react';
import { Alert } from '@components/Alert/Alert';

function SaveLoad() {
  // Alerts
  const [alert, setAlert] = useState<null | {msg: string; type: 'Success' | 'Error';}>(null);
  // Save
  const { saveGuessStates, loadGuessStates } = useGuessStatesContext();
  // Load
  const { FileInput, openPicker } = useJsonFilePicker(
    (json : GuessStatesMap | null) => {
      if (json) {
        loadGuessStates(json);
        setAlert({ type: 'Success', msg: 'File loaded!' });
      } else {
        setAlert({ type: 'Error', msg: 'Invalid JSON' });
      }
    }
  );

  return (
    <>
      {FileInput} {/* Hidden FileInput */}
      <div className='SaveLoad'>
          <button className='SaveButton' onClick={saveGuessStates}>Save Progress</button>
          <button className='LoadButton' onClick={openPicker}>Load Progress</button>
          {alert && (
            <Alert 
              type={alert.type}
              message={alert.msg}
              onDone={() => setAlert(null)}
            />
          )}
      </div>
    </>
  );
}

export default SaveLoad;