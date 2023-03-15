import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CharactersPage, HomePage, ListUsersPage, UserPage } from './pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharactersPage />
  </React.StrictMode>
)
