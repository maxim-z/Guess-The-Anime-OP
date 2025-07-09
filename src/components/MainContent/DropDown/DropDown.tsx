import { useState, type ReactHTMLElement } from 'react';
import './DropDown.css'
import { filters } from '@types/filter';
import type { FilterProps, FilterType } from '@types/filter';
import { useNavigate } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';

function Dropdown( { filter, setFilter } : FilterProps ) {
  const navigate = useNavigate();
  const [value, setValue] = useState<FilterType>(filter);

  const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as FilterType;
    setValue(selected);
    setFilter(selected);
  };

  const navRandomSong = () => {
    const randomNum = Math.floor(Math.random() * MAX_SONGS + 1);
    navigate(`/guess?id=${randomNum}&filter=${filter}`)
  }

  return (
    <div className='FilterContainer'>
      <div className='Filter'>
        <select value={value} onChange={handleChange}>
          {filters.map((f, i) => (
            <option className='FilterOptions' key={i} value={f}>{f}</option>
          ))}
          {/* <option value={filters[0]}>Most Popular by Song Viewcount</option>
          <option value={filters[1]}>Random Preset 1</option>
          <option value={filters[2]}>Random Preset 2</option>
          <option value={filters[3]}>Random Preset 3</option>
          <option value={filters[4]}>Most Popular by Anime Score</option>
          <option value={filters[5]}>Random Preset 4</option>
          <option value={filters[6]}>Random Preset 5</option>
          <option value={filters[7]}>Random Preset 6</option> */}
        </select>
        {/* <button className='button-33'>Random Song!</button> */}
        <button className='RandomSong' onClick={navRandomSong}>Random Song!</button>
        {/* <button className='RandomSong2' onClick={navRandomSong}>
          Random Song!
          <div className='GradientContainer'>
            <span className='Gradient one'></span>
            <span className='Gradient two'></span>
          </div>
        </button> */}
      </div>
    </div>
  );
}

export default Dropdown;

{/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" text-anchor="middle" font-family="Arial, sans-serif"
                  font-size="2.3vw" stroke="white" stroke-width="0.045vw" fill="none">
              <tspan x="50%" y="50%">Random</tspan>
              <tspan x="50%" y="90%">Song!</tspan>
            </text>
          </svg> */}