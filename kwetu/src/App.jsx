
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Mission from './components/Mission'
import Home from './components/Home'
import OurStaff from './components/OurStaff'

function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mission' element={<Mission/>} />
      <Route path='/our-staff' element={<OurStaff/>} />
    </Routes>
    </>
  )
}

export default App
