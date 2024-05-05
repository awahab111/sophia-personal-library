import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from '@pages/Signup.jsx'
import Login from '@pages/Login.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login className="bg-off-white"/>
  </React.StrictMode>,
)
