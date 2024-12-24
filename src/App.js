import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Composant Navbar
import Shop from './Shop'; // Page Shop
import Login from './Login'; // Page Login
import Men from './Men'; // Page Men
import Women from './Women'; // Page Women
import Cart from './Cart'; // Page Cart
import Kids from './Kids'; // Page Kids
import Footer from './Footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Composant Navbar */}
        <Navbar />

        {/* Définir les différentes routes de l'application */}
        <Routes>
          <Route path="/" element={<Shop />} /> {/* Route pour la page Shop */}
          <Route path="/login" element={<Login />} /> {/* Route pour la page Login */}
          <Route path="/men" element={<Men />} /> {/* Route pour la page Men */}
          <Route path="/women" element={<Women />} /> {/* Route pour la page Women */}
          <Route path="/cart" element={<Cart />} /> {/* Route pour la page Cart */}
          <Route path="/kids" element={<Kids />} /> {/* Route pour la page Kids */}
          
          {/* Route par défaut pour une page 404 non trouvée */}
          <Route path="*" element={<h2>Page non trouvée</h2>} />
        </Routes>

         <Footer/>{/* Composant Footer */}
       
      </div>
    </BrowserRouter>
  );
};

export default App;












