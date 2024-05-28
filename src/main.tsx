import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Dashborad from './components/dashboard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <App>
        <Dashborad/>
    </App>
  </React.StrictMode>,
)
