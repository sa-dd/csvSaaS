import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeToggle } from "./components/mode-toggle"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
        <div className='flex justify-center py-2 w-full h-[800px]'>
            <ModeToggle/>
        </div>
    </App>
  </React.StrictMode>,
)
