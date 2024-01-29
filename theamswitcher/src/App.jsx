import { useEffect, useState } from "react"
import { TheamProvider } from "./context/theam"
import ThemeBtn from "./context/components/Theambtn"
import Card from "./context/components/Card"



function App() {
const[theamMode,setTheamMode]=useState('light')  
const darkmode=()=>{
  setTheamMode('dark')
}
const lightmode=()=>{
  setTheamMode('light')
}
useEffect(()=>{
document.querySelector('html').classList.remove('dark','light')
document.querySelector('html').classList.add(theamMode)
},[theamMode])
  return (
    <>
     <TheamProvider value={{theamMode,darkmode,lightmode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </TheamProvider>
    </>
  )
}

export default App
