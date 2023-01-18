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
        <Route to="/" element={<Home />} />
        <Route to="/contacto" element={<Contacto />} />
        <Route to="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
