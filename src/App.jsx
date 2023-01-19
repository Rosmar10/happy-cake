import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home'
import Contacto from './views/Contacto'
import CustomNavbar from './components/CustomNavbar'
import NotFound from './views/NotFound'


function App() {

  return (
    <BrowserRouter>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
