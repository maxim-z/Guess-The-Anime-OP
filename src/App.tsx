import './App.css'
import React, { memo } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '@components/Header/Header'
import MainContent from '@components/MainContent/MainContent'
import GuessTheSong from '@components/GuessTheSong/GuessTheSong'
import type { MemoizedHeaderProps } from '@types'
import { useModeContext } from '@components/ContextProviders/ModeContext'
import { PROD } from '@config/config'
import Stats from '@components/Menu/Stats/Stats'
import About from '@components/Menu/About'
import FAQ from '@components/Menu/FAQ'
import Rules from '@components/Menu/Rules'
// import NineTailsFox from '/naruto_nine_tailed_fox.jpg'

const backgroundImg = null; // NineTailsFox;

// to avoid re-rendering every time the path changes except for /guess where it should be hidden
const MemoizedHeader = memo(({ hidden, mode, setMode }: MemoizedHeaderProps) => {
  if (hidden) return null;
  return <Header mode={mode} setMode={setMode} />;
});

// to exclude dev from production builds
const DevLazy = React.lazy(() => import("@components/Dev/Dev"));
const routes = [
    <Route path="/" element={<MainContent />} key='maincontent' />,
    <Route path='/guess' element={<GuessTheSong />} key='guess' />,
    <Route path="/about" element={ <About /> } key='about' />,
    <Route path="/rules" element={ <Rules /> } key='rules' />,
    <Route path="/faq" element={ <FAQ /> } key='faq' />,
    <Route path="/stats" element={ <Stats /> } key='stats' />,
    ...(PROD ? [] : [
      <Route
        path="/dev"
        element={ 
          <React.Suspense fallback={<div>Loading...</div>}>
            <DevLazy />
          </React.Suspense>
         }
         key='dev' />
    ])
];

function App() {
  const { mode, updateMode } = useModeContext();

  const location = useLocation();
  const hideHeader = location.pathname.startsWith('/guess');

  return (
    <div className={`App ${mode}`} style={{ backgroundImage: `url(${backgroundImg})`}}>
      {/* {!hideHeader && <Header mode={mode} setMode={setMode}/>} */}
      <MemoizedHeader hidden={hideHeader} mode={mode} setMode={updateMode} />
      <Routes>
        {routes}
      </Routes>
    </div>
  )
}

export default App