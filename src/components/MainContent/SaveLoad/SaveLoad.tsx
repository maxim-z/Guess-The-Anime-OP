import { useJsonFilePicker } from '@components/FilePicker/FilePicker';
import { useGuessStatesContext, type GuessStatesMap } from '@components/ContextProviders/GuessStatesContext';
import { useState } from 'react';
import { Alert } from '@components/Alert/Alert';
import { motion, useAnimation } from 'framer-motion';

function SaveLoad() {
  // Animation
  const saveControls = useAnimation();
  const loadControls = useAnimation();
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
  // User hover/tap for pc/mobile
  const handleStart = () => saveControls.start({ x: 0, transition: { duration: 0.15 }});
  const handleEnd = () => saveControls.start({ x: '-101%', transition: { duration: 0.5 }});

  return (
    <>
      {FileInput} {/* Hidden FileInput */}
      {/* <div className='SaveLoad'> */}
          <motion.button 
            className='SaveButton relative overflow-hidden bg-gray-500 text-white text-[11px] sm:text-sm lg:text-lg w-[90%] h-16 lg:h-20 px-4 py-2 rounded' 
            onHoverStart={handleStart}
            onHoverEnd={handleEnd}
            onTapStart={handleStart}
            onTapCancel={handleEnd}
            onClick={() => {
              saveGuessStates();
              handleEnd();
            }}
          >
            <motion.div
              className='absolute top-0 left-0 h-full w-full bg-[var(--primary-color)] rounded z-0'
              animate={saveControls}
              initial={{ x: '-101%', transition: { duration: 0.15 }}}
            />
            <span 
              className='relative z-10'
            >
              Save Progress
            </span>
          </motion.button>

          <motion.button 
            onHoverStart={() => loadControls.start({ x: 0, transition: { duration: 0.15 }})}
            onHoverEnd={() => loadControls.start({ x: '101%', transition: { duration: 0.5 }})}
            className='LoadButton relative overflow-hidden bg-gray-500 text-white text-[11px] sm:text-sm lg:text-lg w-[90%] h-16 lg:h-20 px-4 py-2 rounded' 
            onClick={openPicker}
          >
            <motion.div
              className='absolute top-0 right-0 h-full w-full bg-green-500 rounded z-0'
              animate={loadControls}
              initial={{ x: '101%', transition: { duration: 0.15 }}}
            />
            <span className='relative z-10'>
              Load Progress
            </span>
          </motion.button>

          {alert && (
            <Alert 
              type={alert.type}
              message={alert.msg}
              onDone={() => setAlert(null)}
            />
          )}
      {/* </div> */}
    </>
  );
}

export default SaveLoad;