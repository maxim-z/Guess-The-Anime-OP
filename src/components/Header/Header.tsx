// import backgroundImgOpening from '/backgroundOpening.jpg'
// import backgroundImgEnding from '/backgroundEnding.jpg'
import flowerField from '/flower field.jpg'
import layingRiver from '/frieren in river.png'
import { Link } from 'react-router-dom'
import './Header.css'
import StarShapes from '@components/StarShapes/StarShapes'
import type { HeaderProps } from '@types'
import type { ModeType } from '@types'

function Header( { mode, setMode } : HeaderProps) {
  // Mode Changes which go up to App to change the Theme as well as the list of songs displayed in the list
  const toggleMode = () => {
    const nextMode: ModeType = mode === 'Opening' ? 'Ending' : 'Opening';
    setMode(nextMode);
  };
  // const backgroundImg = mode === 'Opening' ? backgroundImgOpening : backgroundImgEnding;
  const backgroundImg = mode === 'Opening' ? layingRiver : flowerField;// : layingRiver;

  return (
    <header className='Header'>
        <div className='BannerWrapper'>
          <div className='Banner' style={{backgroundImage: `url(${backgroundImg})`}}>
            <h1 className='Title'>
              <pre style={{textAlign: 'center'}}>Guess the Anime{' '}</pre>
              <span className='OpeningEnding' onClick={toggleMode}>
                {mode}!
                <StarShapes />
              </span>
              {/* <span className='OpeningEnding' onClick={toggleMode}>Guess the Anime {mode}!</span>               */}
            </h1>
            <nav className='NavMenu'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/rules">Rules</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/stats">Stats</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;