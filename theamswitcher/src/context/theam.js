import { createContext,useContext } from "react";
export const TheamContext=createContext({
    theamMode:'light',
    darkmode:()=>{},
    lightmode:()=>{}


})
export const TheamProvider=TheamContext.Provider
export default function useTheam(){
    return useContext(TheamContext)
}