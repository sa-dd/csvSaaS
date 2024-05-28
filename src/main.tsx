import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeToggle } from "./components/mode-toggle"
import { Input } from "@/components/ui/input"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
        <div className='flex flex-col w-full h-[900px] p-4 items-center'>
            <ModeToggle/>
            <div className='flex flex-col items-center justify-between w-1/2 h-[90%]  rounded-md'>
                <h1 className='text-[5rem] font-bold mb-8 text-accent-foreground font-mono'> Upload Your CSVs </h1>
                <Input type='file' accept='.csv' className='file:text-primary h-28 w-60 cursor-pointer text-primary'/>
                <Input type='file' accept='.csv' className='file:text-primary h-28 w-60 cursor-pointer text-primary'/>
                <Input type='file' accept='.csv' className='file:text-primary h-28 w-60 cursor-pointer text-primary'/>
                <Input type='file' accept='.csv' className='file:text-primary h-28 w-60 cursor-pointer text-primary'/>
                <Input type='file' accept='.csv' className='file:text-primary h-28 w-60 cursor-pointer text-primary'/>
            </div>
        </div>
    </App>
  </React.StrictMode>,
)
