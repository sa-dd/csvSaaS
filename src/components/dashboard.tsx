import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Dashborad(){
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type === 'text/csv') { // Check if the file is a CSV file
        newFiles.push(files[i]);
      }
    }
    if (newFiles.length > 5) {
      alert('You can upload a maximum of 5 files.');
      return;
    }
    else console.log(newFiles.length)
    setSelectedFiles(newFiles);
  };

  return (
        <div className='flex flex-col w-full h-[900px] p-4 items-center'>
            <ModeToggle/>
            <div className='flex flex-col items-center w-1/2 h-[90%]  rounded-md'>
                <h1 className='overline decoration-wavy decoration-slate-800 text-[5rem] font-bold mt-16  text-accent-foreground font-mono'> Upload Your CSVs </h1>
                <Input type='file' accept='.csv' className='file:py-9 file:px-4 file:cursor-pointer  file:flex-col file:justify-center file:text-primary h-28 w-60 mt-36 cursor-pointer text-primary hover:bg-secondary' onChange={handleFileChange} multiple/>
            </div>
        </div>
  )
}
