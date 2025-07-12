import './MainContent.css'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'

function Main() {

    return (
        <div className='MainFilter'>
          <div className='MainContent'>
            <Dropdown />
            <OpeningsSongList />
            <SaveLoad />
          </div>
        </div>
    )
}

export default Main;