import './App.css'
import { memo } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '@components/Header/Header'
import MainContent from '@components/MainContent/MainContent'
import GuessTheSong from '@components/GuessTheSong/GuessTheSong'
import type { MemoizedHeaderProps } from '@types'
import { useModeContext } from '@components/ContextProviders/ModeContext'

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
          element={ <div>About</div> } />
        <Route 
          path="/rules" 
          element={ <div>Rules</div> } />
        <Route 
          path="/faq" 
          element={ <div>FAQ</div> } />
        <Route 
          path="/stats" 
          element={ <div>Stats</div> } />
      </Routes>
    </div>
  )
}

export default App