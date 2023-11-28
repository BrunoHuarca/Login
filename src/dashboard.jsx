// Dashboard.jsx
import React from 'react';

import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Dashboard() {
  
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleRedirectToApp = () => {
    // Utiliza la función navigate para redirigir a la página de inicio
    navigate('/');
  };

 

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Dashboard</h1>
      <p>Aquí puedes ver información importante.</p>
      <button onClick={handleRedirectToApp} >Cerrar Sesión</button>
      
    </div>
  );
}

export default Dashboard;
