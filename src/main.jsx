import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Tasks } from './components/tasks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tasks/>
  </React.StrictMode>,
)
