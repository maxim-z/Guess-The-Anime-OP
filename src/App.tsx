import { useState } from 'react'
import './App.css'
import Header from './Header'
import Dropdown from './DropDown'
import OpeningsSongList from './OpeningsSongList'
import SaveLoad from './SaveLoad'

function App() {
  const [mode, setMode] = useState<'Opening' | 'Ending'>('Opening');
  const theme = mode === 'Opening' ? 'Opening' : 'Ending';

  return (
    <>
    <div className={theme}>
      <Header mode={mode} setMode={setMode}/>
      <div className='MainContent'>
        <Dropdown />
        <OpeningsSongList />
        <SaveLoad />
      </div>
    </div>
    </>
  )
}

export default App