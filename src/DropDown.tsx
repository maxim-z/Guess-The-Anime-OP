import { useState } from 'react';
import './DropDown.css'

function Dropdown() {
  const [value, setValue] = useState('Most Popular by Song');

  return (
    <div className='Filter'>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="Most Popular by Song Viewcount">Most Popular by Song Viewcount</option>
        <option value="Most Popular by Anime Score">Most Popular by Anime Score</option>
        <option value="Random Preset 1">Random Preset 1</option>
        <option value="Random Preset 2">Random Preset 2</option>
        <option value="Random Preset 3">Random Preset 3</option>
        <option value="Random Preset 4">Random Preset 4</option>
        <option value="Random Preset 5">Random Preset 5</option>
      </select>
      <button>Random Song!</button>
    </div>
  );
}

export default Dropdown;