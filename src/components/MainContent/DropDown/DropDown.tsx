import './DropDown.css'
import { filters, type FilterType } from '@types';
import { useNavigate } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';
import { useFilterContext } from '@components/ContextProviders/FilterContext';
import Select, { type SingleValue, type StylesConfig } from 'react-select';

type Option = { value: string, label: string };

function Dropdown() {
  const navigate = useNavigate();
  const filterContext = useFilterContext();

  const handleChange = (choice: SingleValue<Option>) => {
    if (!choice) return;
    const selected = choice.value as FilterType;
    filterContext.updateFilter(selected);
  };

  // const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
  //   const selected = e.target.value as FilterType;
  //   filterContext.updateFilter(selected);
  // };

  const navRandomSong = () => {
    const randomNum = Math.floor(Math.random() * MAX_SONGS + 1);
    navigate(`/guess?id=${randomNum}&filter=${filterContext.filter}`)
  }

  // for Select element
  const selectOptions: Option[] = filters.map((f) => ({
    value: f,
    label: f,
  }));
  const selectStyles: StylesConfig<Option, false> = {
    option: (provided, state) => ({
      ...provided,
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      color: state.isSelected ? 'black' : 'rgba(0, 0, 0, 0.7)',
    }),
    singleValue: (provided) => ({
      ...provided,
      whiteSpace: 'normal',
      color: 'black',
    }),
  }

  return (
    <div className='FilterContainer'>
      <div className='Filter'>
        <Select
          className='SelectOptions'
          value={{ value: filterContext.filter, label: filterContext.filter }}
          options={selectOptions}
          styles={selectStyles}
          components={{ DropdownIndicator: () => null }}
          isSearchable={false}
          onChange={handleChange}
        />
        {/* <select className='SelectOption' value={filterContext.filter} onChange={handleChange}>
          {filters.map((f, i) => (
            <option className='FilterOptions' key={i} value={f}>{f}</option>
          ))}
        </select> */}
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