import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ModeProvider } from '@components/ContextProviders/ModeContext.tsx'
import { FilterProvider } from '@components/ContextProviders/FilterContext.tsx'
import { GuessStatesProvider } from '@components/ContextProviders/GuessStatesContext.tsx'

// Mode
//  Filter
//    GuessStates

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <FilterProvider>
          <GuessStatesProvider>
            <App />
          </GuessStatesProvider>
        </FilterProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>,
)
