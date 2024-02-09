import { Route, Routes } from 'react-router-dom';
import Mission from './components/Mission'
import Home from './components/Home'
import OurStaff from './components/OurStaff'
import Vision from './pages/Vision'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mission' element={<Mission/>} />
      <Route path='/vision' element={<Vision/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/our-staff' element={<OurStaff/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
