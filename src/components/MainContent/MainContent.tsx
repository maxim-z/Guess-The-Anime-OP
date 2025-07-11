import './MainContent.css'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'
import { useFilterContext } from '@components/ContextProviders/FilterContext'

function Main() {
  const filterContext = useFilterContext();

    return (
        <div className='MainFilter'>
          {filterContext.filter}
          <div className='MainContent'>
            <Dropdown />
            <OpeningsSongList />
            <SaveLoad />
          </div>
        </div>
    )
}

export default Main;