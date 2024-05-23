import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {RingLoader} from 'react-spinners'
import ContextHoc from './context/ContextHoc.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextHoc>
    <Suspense fallback={<div className='flex justify-center items-center h-screen w-[100vw]'><RingLoader color="#36d7b7" /> <p style={{paddingLeft:"30px"}}>Loading 3D assets...</p></div>}><App /></Suspense>
  </ContextHoc>,
  </BrowserRouter>
)
