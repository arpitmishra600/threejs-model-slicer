import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useContextHook } from '../context/useContextHook'

export default function Alerts() {
    const {preview,disect,reset,aniplay}=useContextHook()

    useEffect(()=>{
        if(preview){toast.success("preview enabled")}else{toast.error("preview disabled")}
    },[preview])
    useEffect(()=>{
        if(disect){toast.success("disect enabled")}else{toast.error("disect disabled")}
    },[disect])
    useEffect(()=>{
        toast.success("reset successful")
    },[reset])
    useEffect(()=>{
        if(aniplay){toast.success("animation enabled")}else{toast.error("animation disabled")}
    },[aniplay])
  return (
   <Toaster position='top-right'  reverseOrder={false}/>
  )
}
