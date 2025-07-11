import './DropDown.css'
import { filters, type FilterType } from '@types/filter';
import { useNavigate } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';
import { useFilterContext } from '@components/ContextProviders/FilterContext';

function Dropdown() {
  const navigate = useNavigate();
  const filterContext = useFilterContext();

  const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as FilterType;
    filterContext.updateFilter(selected);
  };

  const navRandomSong = () => {
    const randomNum = Math.floor(Math.random() * MAX_SONGS + 1);
    navigate(`/guess?id=${randomNum}&filter=${filterContext.filter}`)
  }

  return (
    <div className='FilterContainer'>
      <div className='Filter'>
        <select value={filterContext.filter} onChange={handleChange}>
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