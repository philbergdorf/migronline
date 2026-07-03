import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App as KonstaApp } from 'konsta/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KonstaApp theme="ios" safeAreas>
      <HashRouter>
        <App />
      </HashRouter>
    </KonstaApp>
  </React.StrictMode>
)
