import { useModeContext } from '@components/ContextProviders/ModeContext'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'

function Main() {
    const { mode } = useModeContext();

    return mode === 'Opening' ? (
        <div className='MainContent flex flex-row justify-center w-[100vw] h-full'>
          <Dropdown />
          <OpeningsSongList />
          <SaveLoad />
          {/* <div className='w-[15%] h-50 bg-green-800 text-center justify-self-center content-normal'>
            First Element
          </div>
          <div className='w-[70%] h-50 mx-auto bg-blue-800 text-center justify-self-center content-normal'>
            Second Element
          </div>
          <div className='flex flex-col w-[15%] h-50 bg-red-800 justify-center'>
            <button>Button One</button>
            <button>Button Two</button>
          </div> */}
        </div>
    ) : (
      <div>Under Construction</div>
    )
}

export default Main;