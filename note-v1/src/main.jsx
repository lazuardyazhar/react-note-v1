import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NoteList from './components/NoteList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteList />
  </React.StrictMode>,
)
