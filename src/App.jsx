import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Usuario from './pages/Usuario/Usuario'
import ContraR from './pages/ContraR/ContraR'
import Register from './pages/Register/Register'
import Admin from './pages/Admin/Admin'
import PanelAdmin from './pages/PanelAdmin/PanelAdmin'
import Solicitudes from './pages/Solicitudes/Solicitudes'
import Rutas from './pages/Rutas/Rutas'
import Camiones from './pages/Camiones/Camiones'
import InicioS from './pages/InicioS/InicioS'
import SolicitudesE from './pages/SolicitudesE/SolicitudesE'
import RutasU from './pages/RutasU/RutasU'
import EstadoCamionesU from './pages/EstadoCamioneU/EstadoCamionesU'
import ConsultarRU from './pages/ConsultarRU/ConsultarRU'
import PanelDU from './pages/PanelDusuario/PanelDU'
import RegistroC from './pages/RegistroC/RegistroConductor'
import LoginC from './pages/LoginC/LoginConductor'
import PanelC from './pages/PanelC/PanelC'
import Conductores from './pages/Conductores/Conductores'

export function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/InicioS" element={<InicioS />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/ContraR" element={<ContraR />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/PanelAdmin" element={<PanelAdmin />} />
      <Route path="/Camiones" element={<Camiones />} />
      <Route path="/Rutas" element={<Rutas />} />
      <Route path="/RutasU" element={<RutasU />} />
      <Route path="/Solicitudes" element={<Solicitudes />} />
      <Route path="/SolicitudesE" element={<SolicitudesE />} />
      <Route path="/EstadoCamionesU" element={<EstadoCamionesU />} />
      <Route path="/ConsultarRU" element={<ConsultarRU />} />
      <Route path="/PanelDU" element={<PanelDU />} />
      <Route path="/RegistroC" element={<RegistroC />} />
      <Route path="/LoginC" element={<LoginC />} />
      <Route path="/PanelC" element={<PanelC />} />
      <Route path="/Conductores" element={<Conductores />} />
    </Routes>
  );
}

export default App;
