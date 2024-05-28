import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeToggle } from "./components/mode-toggle"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
        <div className='flex flex-col w-full h-[900px] p-4 items-center justify-between'>
             <ModeToggle/>
            <div className='flex justify-center py-2 w-1/2 h-[90%] border-border border rounded-md'>
            </div>
        </div>
    </App>
  </React.StrictMode>,
)
