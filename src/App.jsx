import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Usuario } from './pages/Usuario/Usuario'
import { ContraR } from './pages/ContraR/ContraR'
import { Register } from './pages/Register/Register'
import { Admin } from './pages/Admin/Admin'
import { PanelAdmin } from './pages//PanelAdmin/PanelAdmin'
import { Solicitudes } from './pages/Solicitudes/Solicitudes'
import { Rutas } from './pages/Rutas/Rutas'
import { Camiones } from './pages/Camiones/Camiones'
import { InicioS } from './pages/InicioS/InicioS'
import { SolicitudesE } from './pages/SolicitudesE/SolicitudesE'

export function App() {
  return (
    <>
      {/* Puedes dejar Header aquí si quieres que esté siempre visible */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioS" element={<InicioS />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/ContraR" element={<ContraR />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/PanelAdmin" element={<PanelAdmin />} />
        <Route path="/Camiones" element={<Camiones />} />
        <Route path="/Rutas" element={<Rutas />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
        <Route path="/SolicitudesE" element={<SolicitudesE />} />
        <Route path="/InicioS" element={<InicioS />} />
      </Routes>
    </>
  )
}

export default App
