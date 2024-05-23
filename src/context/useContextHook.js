import { useContext } from "react"
import { Cont } from "./ContextHoc"
export const useContextHook=()=>{
    return useContext(Cont)
} 
