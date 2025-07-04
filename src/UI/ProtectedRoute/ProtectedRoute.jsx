import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  // Si no hay token, redirigir al login correspondiente
  if (!token) {
    return <Navigate to={requiredRole === 'admin' ? '/Admin' : '/InicioS'} />;
  }

  // Si hay un rol requerido y no coincide con el del usuario
  if (requiredRole && rol !== requiredRole) {
    return <Navigate to={rol === 'admin' ? '/PanelAdmin' : '/Admin'} />;
  }

  return children;
};

export default ProtectedRoute;
