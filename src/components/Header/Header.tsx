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
  <li><Link to="/" key='link-maincontent'>Home</Link></li>,
  <li><Link to="/about" key='link-about'>About</Link></li>,
  <li><Link to="/rules" key='link-rules'>Rules</Link></li>,
  <li><Link to="/faq" key='link-faq'>FAQ</Link></li>,
  <li><Link to="/stats" key='link-stats'>Stats</Link></li>,
  ...(PROD ? [] : [
    <li><Link to="/dev" key='link-dev'>Dev</Link></li>
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
    <header className="Header w-full h-full max-h-[1080px] text-center">
      <div className="BannerWrapper relative flex items-center justify-center w-full p-[1vw]">
        <div
          className="Banner w-full max-w-[1920px] h-[clamp(40vh,10vw+30vh,65vh)] max-h-[972px] bg-cover bg-center flex flex-col justify-center items-center shrink-0
                    border-8 border-[var(--primary-color)]"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <h1 
            className="Title w-full h-full max-h-[150px] text-white text-[7.35vw] m-0 flex flex-row justify-center items-center 
                      text-shadow-3xl text-shadow-red-900 md:text-[max(7.5vw,45px)]">
            {/* style={{ textShadow: '0 0 10px black' }} */}
            <pre className="text-center">Guess the Anime </pre>
            <span
              className="OpeningEnding relative text-[var(--secondary-color)] hover:text-[var(--tertiary-color)]"
              onClick={toggleMode}
            >
              {mode}!
              <StarShapes />
            </span>
          </h1>

          <nav className="NavMenu w-auto p-4 bg-[var(--primary-color)] text-white text-md md:text-md lg:text-3xl xl:text-[40px] rounded-lg lg:rounded-xl">
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