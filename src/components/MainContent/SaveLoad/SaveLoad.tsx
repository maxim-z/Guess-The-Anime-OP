import { useState } from 'react';
import './SaveLoad.css'

function SaveLoad() {
  const [value, setValue] = useState('Most Popular by Song');

  return (
    <div className='SaveLoad'>
        <button className='SaveButton'>Save Progress</button>
        <button className='LoadButton'>Load Progress</button>
    </div>
  );
}

export default SaveLoad;