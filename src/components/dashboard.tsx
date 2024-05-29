import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useState, useEffect } from "react";


interface StringKeyObject {
  [key: string]: any;
}

export default function Dashborad(){
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [csvData, setCsvData] = useState<Array<object>>([]);
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(()=>{
    console.log(csvData)
  },[csvData])

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newFiles = [];

    for (let i = 0; i < files!.length; i++) {
      if (files![i].type === 'text/csv') { // Check if the file is a CSV file
        newFiles.push(files![i]);
      }
    }

    if (newFiles.length > 5) {
      alert('You can upload a maximum of 5 files.');
      return;
    }
    setSelectedFiles(newFiles);
    setFlag(false);
  };
 
  useEffect(()=>{

          for(const file of selectedFiles!) {
                const reader = new FileReader();
                reader.onloadend = (e:ProgressEvent<FileReader>) => {
                    const text = e.target!.result;
                    setCsvData((prevArray) => [...prevArray, ...parseCSV(text!)])
                }
                reader.readAsText(file)
          } 


  },[selectedFiles])

    function csvToObjectArray(csvData:Array<Array<string>>) {

        const keys = csvData[0];
        const values = csvData.slice(1); // Exclude the first row (header)

        const objectsArray = values.map(row => {
            const obj: StringKeyObject = {};
            keys.forEach((key:string, index:number) => {
                obj[key] = row[index];
            });
            return obj;
        });

        console.log(objectsArray)

        return objectsArray;
    }

   const parseCSV = (csvText:string | ArrayBuffer) => {
        csvText = csvText as string;
        const rows = csvText.split('\n');
        const data = rows.map((row:string) => row.split(','));
        return csvToObjectArray(data);
  };


  return (
        <div className='flex flex-col w-full h-[950px] p-4 pb-0 items-center'>
            <ModeToggle/>
            <div className='flex flex-col items-center w-1/2 h-[90%]  rounded-md'>
                <h1 className='overline decoration-wavy decoration-secondary text-[5rem] font-bold mt-16 text-accent-foreground font-mono'> Upload Your CSVs </h1>
                {flag ? <Input type='file' accept='.csv' className='file:py-9 file:px-4 file:cursor-pointer  file:flex-col file:justify-center file:text-primary h-28 w-60 mt-36 cursor-pointer text-primary border-secondary hover:bg-accent' onChange={handleFileChange} multiple/> :
                <ScrollArea className="w-full mt-16 bg-accent rounded-lg">
                    <pre className="flex flex-row flex-wrap p-4 justify-between items-center">
                        {csvData.map((data:any, index:any)=><div key={index}>{JSON.stringify(data, null, 2)}</div>)}
                    </pre>
                    <ScrollBar/>
                </ScrollArea>}
            </div>
        </div>
  )
}
