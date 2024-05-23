import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Home from './components/Home'
import BottomNav from './components/BottomNav'
import Alerts from './components/Alerts'


function App() {


  return (
    <Routes>

      <Route path="/" element={

    <div className='flex items-center justify-center flex-col gap-5 h-[100vh] w-[100vw]'>
        <Canvas style={{width:"500px",height:"500px",background:"black"}}
          
          gl={{preserveDrawingBuffer:true}}
        ><Home/>
        </Canvas>
        <BottomNav/>
        <Alerts/>
        <h2>*Left click + drag for angular rotation (in preview mode)</h2>
        <h2>*Rigth click + drag for axial camera movement (in preview mode)</h2>
    </div>
     
      } />
   
     
      
    </Routes>
  )
}

export default App
