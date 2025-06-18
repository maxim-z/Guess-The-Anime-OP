import backgroundImgOpening from '/backgroundOpening.jpg'
import backgroundImgEnding from '/backgroundEnding.jpg'
import type { Dispatch, SetStateAction } from 'react'
import './Header.css'

type HeaderProps = {
    mode: 'Opening' | 'Ending';
    setMode: Dispatch<SetStateAction<'Opening' | 'Ending'>>;
};

function Header( { mode, setMode } : HeaderProps) {
  // Mode Changes which go up to App to change the Theme as well as the list of songs displayed in the list
  const toggleMode = () => {
    setMode(prev => (prev === 'Opening' ? 'Ending' : 'Opening'))
  };
  const backgroundImg = mode === 'Opening' ? backgroundImgOpening : backgroundImgEnding;

  return (
    <header className='Header'>
        <div className='BannerWrapper'>
          <div className='Banner' style={{backgroundImage: `url(${backgroundImg})`}}>
            <h1 className='Title'>
              Guess the Anime&nbsp;
              <span className='OpeningEnding' onClick={toggleMode}>{mode}!</span>
              {/* <span className='OpeningEnding' onClick={toggleMode}>Guess the Anime {mode}!</span>               */}
            </h1>
            <nav className='NavMenu'>
              <ul>
                <li>Guess</li>
                <li>About</li>
                <li>Rules</li>
                <li>FAQ</li>
                <li>Stats</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;