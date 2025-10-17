import RandomSongButton from '@components/Buttons/RandomSongButton/RandomSongButton';
import { useModeContext } from '@components/ContextProviders/ModeContext'
import Dropdown from '@components/MainContent/DropDown/DropDown'
import OpeningsSongList from '@components/MainContent/OpeningsSongList/OpeningsSongList'
import SaveLoad from '@components/MainContent/SaveLoad/SaveLoad'
import { useElementSize } from '@components/CustomUseHooks/useElementSize';
import MovingTextContainer from '@components/Customs/MovingText/MovingTextContainer';

function Main() {
    const { mode } = useModeContext();
    const [BorderWrapperRef, {elHeight, elWidth}] = useElementSize<HTMLDivElement>();

    return mode === 'Opening' ? (
      <div 
        className='BorderWrapper relative flex flex-row justify-center w-[100vw] h-full border-3 border-[var(--primary-color)]'
        ref={BorderWrapperRef}
      >
        <div className='MovingTextContainer absolute w-[100vw] h-full top-0 left-0 overflow-hidden z-1'>
          <MovingTextContainer width={elWidth} height={elHeight} />
        </div>

        <div className='MainContent relative flex flex-row justify-center w-[100vw] h-full top-[1.5vw] z-2'>
          {/* All these elements below add up to 100vw. The button is 20vw, the songlist is 60vw, and the saveload is 20vw */}
          <div className='flex flex-col relative items-center w-[20vw]'>
              <RandomSongButton />
          </div>
          <div className='flex flex-col items-center justify-center gap-4 w-[60vw] z-15'>
            <Dropdown />
            <OpeningsSongList />
          </div>
          <div className='flex relative flex flex-col items-center gap-[0.5vw] w-[20vw] h-full'>
            <SaveLoad />
          </div>
        </div>
      </div>
    ) : (
      <div>Under Construction</div>
    )
}

export default Main;