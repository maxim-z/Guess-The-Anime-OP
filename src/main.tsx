import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { GuessStatesProvider } from '@components/ContextProviders/GuessStatesContext.tsx'
import { FilterProvider } from '@components/ContextProviders/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <GuessStatesProvider>
          <App />
        </GuessStatesProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>,
)
