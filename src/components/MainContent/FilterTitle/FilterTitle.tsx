import { useFilterContext } from '@components/ContextProviders/FilterContext'
import './FilterTitle.css'

function FilterTitle() {
    const { filter } = useFilterContext();
    
    return (
        <div className='FilterTitle'>{filter}</div>
    )
}

export default FilterTitle;