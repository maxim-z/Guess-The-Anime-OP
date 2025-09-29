import './DropDown.css'
import { filters, type FilterType } from '@types';
import { useFilterContext } from '@components/ContextProviders/FilterContext';
import Select, { type SingleValue, type StylesConfig } from 'react-select';

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
  // const selectStyles: StylesConfig<Option, false> = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     whiteSpace: 'normal',
  //     wordWrap: 'break-word',
  //     color: state.isSelected ? 'black' : 'rgba(0, 0, 0, 0.7)',
  //   }),
  //   singleValue: (provided) => ({
  //     ...provided,
  //     whiteSpace: 'normal',
  //     color: 'black',
  //   }),
  // }

  const selectStyles: StylesConfig<Option, false> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "0.75rem", // rounded-xl
      borderColor: state.isFocused ? "#22c55e" : "#d1d5db", // green-500 vs gray-300
      boxShadow: state.isFocused ? "0 0 0 2px rgba(34,197,94,0.4)" : "none",
      padding: "0.25rem 0.5rem",
      minHeight: "2.5rem",
      "&:hover": {
        borderColor: "#22c55e",
      },
    }),
    container: (provided) => ({
      ...provided,
      width: "100%", // fixed width
    }),
    valueContainer: (provided) => ({
      ...provided,
      whiteSpace: "normal",
      padding: "0 0.5rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      whiteSpace: "normal",
      color: "#111827", // gray-900
      fontWeight: 500,
      textAlign: 'center',
      fontSize: 'minmax(25px, 1.5rem)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af", // gray-400
    }),
    option: (provided, state) => ({
      ...provided,
      whiteSpace: "normal",
      wordWrap: "break-word",
      borderRadius: "0.5rem",
      padding: "0.5rem 0.75rem",
      backgroundColor: state.isSelected
        ? "#22c55e"
        : state.isFocused
        ? "#f0fdf4"
        : "white", // green-50 on hover, green-500 on select
      color: state.isSelected ? "white" : "#111827",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#22c55e",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.75rem",
      marginTop: "0.25rem",
      boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
      width: "100%", // match dropdown width
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#22c55e" : "#6b7280", // gray-500 → green-500 when active
      "&:hover": {
        color: "#22c55e",
      },
    }),
  };  

  return (
    <div className='Filter flex justify-center w-[50vw] md:w-[35vw]'>
      <Select
        className='SelectOptions'
        value={{ value: filterContext.filter, label: filterContext.filter }}
        options={selectOptions}
        styles={selectStyles}
        // components={{ DropdownIndicator: () => null }}
        isSearchable={false}
        onChange={handleChange}
      />
    </div>
  );
}

export default Dropdown;