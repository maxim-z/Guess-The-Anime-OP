import { useFilterContext } from '@components/ContextProviders/FilterContext'
import './FilterTitle.css'

function FilterTitle() {
    const { filter } = useFilterContext();
    
    return (
        <div className='FilterTitle flex gap-2 items-center justify-center text-center'>
            {filter}
            <svg 
                className="size-6 md:size-8 w-[75] h-[75]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor"
            >
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
                />
            </svg>
        </div>
    )
}

export default FilterTitle;