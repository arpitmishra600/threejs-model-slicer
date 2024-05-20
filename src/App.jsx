import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Background from './components/Background'


function App() {


  return (
    <Routes>

      <Route path="/" element={<Background><Home/></Background>} />
      
     
      
    </Routes>
  )
}

export default App
