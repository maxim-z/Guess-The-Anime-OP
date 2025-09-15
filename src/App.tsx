import './App.css'
import { memo } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '@components/Header/Header'
import MainContent from '@components/MainContent/MainContent'
import GuessTheSong from '@components/GuessTheSong/GuessTheSong'
import type { MemoizedHeaderProps } from '@types'
import { useModeContext } from '@components/ContextProviders/ModeContext'
import { PROD } from '@config/config'
import Dev from '@components/Dev/Dev'
import Stats from '@components/Menu/Stats'
import About from '@components/Menu/About'
import FAQ from '@components/Menu/FAQ'
import Rules from '@components/Menu/Rules'

// to avoid re-rendering every time the path changes except for /guess where it should be hidden
const MemoizedHeader = memo(({ hidden, mode, setMode }: MemoizedHeaderProps) => {
  if (hidden) return null;
  return <Header mode={mode} setMode={setMode} />;
});

function App() {
  const { mode, updateMode } = useModeContext();

  const location = useLocation();
  const hideHeader = location.pathname.startsWith('/guess');

  return (
    <div className={`App ${mode}`}>
      {/* {!hideHeader && <Header mode={mode} setMode={setMode}/>} */}
      <MemoizedHeader hidden={hideHeader} mode={mode} setMode={updateMode} />
      <Routes>
        <Route 
          path="/" 
          element={<MainContent />} />
        <Route 
          path='/guess' 
          element={<GuessTheSong />} />
        <Route 
          path="/about" 
          element={ <About /> } />
        <Route 
          path="/rules" 
          element={ <Rules /> } />
        <Route 
          path="/faq" 
          element={ <FAQ /> } />
        <Route 
          path="/stats" 
          element={ <Stats /> } />
        {!PROD && (
          <Route
            path="/dev"
            element={ <Dev /> } />
        )}
      </Routes>
    </div>
  )
}

export default App