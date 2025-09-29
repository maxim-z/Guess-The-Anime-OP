import './DropDown.css'
import { filters, type FilterType } from '@types';
import { useFilterContext } from '@components/ContextProviders/FilterContext';
import Select, { type SingleValue, type StylesConfig } from 'react-select';
import RandomSongButton from '@components/Buttons/RandomSongButton/RandomSongButton';

type Option = { value: string, label: string };

function Dropdown() {
  // Filter Updates
  const filterContext = useFilterContext();
  
  const handleChange = (choice: SingleValue<Option>) => {
    if (!choice) return;
    const selected = choice.value as FilterType;
    filterContext.updateFilter(selected);
  };
  
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
        <RandomSongButton />
      </div>
    </div>
  );
}

export default Dropdown;