import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import AppRouter from './AppRouter'
import { NoteProvider } from './contexts/NoteContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteProvider>
      <AppRouter/>
    </NoteProvider>
  </React.StrictMode>,
)
