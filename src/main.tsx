import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ModeProvider } from '@components/ContextProviders/ModeContext.tsx'
import { FilterProvider } from '@components/ContextProviders/FilterContext.tsx'
import { GuessStatesProvider } from '@components/ContextProviders/GuessStatesContext.tsx'

// Debugging on mobile
import eruda from 'eruda';

if (import.meta.env.DEV) {
  eruda.init();
}

// Mode
//  Filter
//    GuessStates

const basename = import.meta.env.PROD ? '/Guess-The-Anime-OP' : '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
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
