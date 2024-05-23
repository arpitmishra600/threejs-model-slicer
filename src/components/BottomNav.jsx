import React from 'react'
import Button from './Button'
import { useContextHook } from '../context/useContextHook'

export default function BottomNav() {
    const {setPreview,preview,setPosition,initialpos,disect,setDisect,reset,setReset,aniplay,setAniPlay}=useContextHook()
  return (
    <div className='flex'>
      <Button name="Preview" click={()=>{setPreview(!preview);setDisect(false)}}/>
      <Button name="Reset" click={()=>{setPosition(initialpos.current);setReset(!reset)}}></Button>
      <Button name="Disect" click={()=>{setDisect(!disect);setPreview(false)}}></Button>
      <Button name="Animation" click={()=>{setAniPlay(!aniplay);setPreview(false);setDisect(false)}}></Button>
    </div>
  )
}
