// import backgroundImgOpening from '/backgroundOpening.jpg'
// import backgroundImgEnding from '/backgroundEnding.jpg'
import flowerField from '/flower field.jpg'
import layingRiver from '/frieren in river.png'
import { Link } from 'react-router-dom'
import './Header.css'
import StarShapes from '@components/StarShapes/StarShapes'
import type { HeaderProps } from '@types'
import type { ModeType } from '@types'
import { PROD } from '@config/config'

const menuList = [
  <li key={'header_li_1'} className='hover:text-[var(--tertiary-color)]'><Link to="/" key='link-maincontent'>Home</Link></li>,
  <li key={'header_li_2'} className='hover:text-[var(--tertiary-color)]'><Link to="/about" key='link-about'>About</Link></li>,
  <li key={'header_li_3'} className='hover:text-[var(--tertiary-color)]'><Link to="/rules" key='link-rules'>Rules</Link></li>,
  <li key={'header_li_4'} className='hover:text-[var(--tertiary-color)]'><Link to="/faq" key='link-faq'>FAQ</Link></li>,
  <li key={'header_li_5'} className='hover:text-[var(--tertiary-color)]'><Link to="/stats" key='link-stats'>Stats</Link></li>,
  ...(PROD ? [] : [
    <li key={'header_li_6'} className='hover:text-[var(--tertiary-color)]'><Link to="/dev" key='link-dev'>Dev</Link></li>
  ])
];

function Header( { mode, setMode } : HeaderProps) {
  // Mode Changes which go up to App to change the Theme as well as the list of songs displayed in the list
  const toggleMode = () => {
    const nextMode: ModeType = mode === 'Opening' ? 'Ending' : 'Opening';
    setMode(nextMode);
  };
  // const backgroundImg = mode === 'Opening' ? backgroundImgOpening : backgroundImgEnding;
  const backgroundImg = mode === 'Opening' ? layingRiver : flowerField;// : layingRiver;

  return (
    <header className="Header w-full h-full max-h-[1080px] text-center border-12 lg:border-8 border-[var(--primary-color)] z-20">
      <div className="BannerWrapper relative flex items-center justify-center w-full">
        <div
          className="Banner w-full aspect-[6/5] md:aspect-[2/1] lg:aspect-[3.5/1] max-w-[1920px] max-h-[972px] bg-cover bg-center 
                    flex flex-col justify-center items-center shrink-0
                    "
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <h1 
            className="Title w-full h-auto min-h-[150px] m-0 
                      flex flex-col md:flex-row justify-center items-center 
                      text-center ext-white text-[10.35vw] md:text-[max(7.0vw,45px)]
                      text-shadow-3xl text-shadow-red-900"
            style={{ textShadow: "0 0 10px black" }}
          >
            <span className="md:whitespace-pre">Guess the Anime </span>
            <span
              className="OpeningEnding relative text-[var(--secondary-color)] hover:text-[var(--tertiary-color)]"
              onClick={toggleMode}
            >
              {mode}!
              <StarShapes />
            </span>
          </h1>

          <nav className="NavMenu w-auto p-2 md:p-4 bg-[var(--primary-color)] text-white text-md md:text-md lg:text-3xl xl:text-[30px] rounded-lg lg:rounded-xl">
            <ul className="flex justify-center gap-4 list-none m-0 p-0">
              {menuList}
            </ul>
          </nav>
        </div>
      </div>
  </header>
  );
}

export default Header;