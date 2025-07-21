import './MainContent.css'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'

function Main() {

    return (
        <div className='MainFilter'>
          <div className='MainContent'>
            {/* <div className='PreventScrollable'> */}
              <Dropdown />
            {/* </div> */}
            {/* <div className='SongWrapper'> */}
              <OpeningsSongList />
            {/* </div> */}
            {/* <div className='PreventScrollable'> */}
              <SaveLoad />
            {/* </div> */}
          </div>
        </div>
    )
}

export default Main;