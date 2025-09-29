import RandomSongButton from '@components/Buttons/RandomSongButton/RandomSongButton';
import { useModeContext } from '@components/ContextProviders/ModeContext'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'

function Main() {
    const { mode } = useModeContext();

    return mode === 'Opening' ? (
        <div className='MainContent relative flex flex-row justify-center w-[100vw] h-full top-[1.5vw]'>
          {/* All these elements below add up to 100vw. The button is 20vw, the songlist is 60vw, and the saveload is 20vw */}
          <div className='flex relative justify-center w-[20vw]'>
              <RandomSongButton />
          </div>
          <div className='flex flex-col items-center justify-center gap-4 w-[60vw]'>
            <Dropdown />
            <OpeningsSongList />
          </div>
          <div className='flex relative flex flex-col items-center gap-[0.5vw] w-[20vw] h-full'>
            <SaveLoad />
          </div>
        </div>
    ) : (
      <div>Under Construction</div>
    )
}

export default Main;