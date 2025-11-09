import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddMeal from './pages/AddMeal';
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import RequireChef from './components/RequireChef';
import { AuthProvider } from './context/AuthContext';
import MyMeals from './pages/MyMeals';
import MyOrders from './pages/MyOrders';
import OrderNow from './pages/OrderNow';
import './App.css';

// Inside <Routes>



function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const handleHover = (e) => {
      
      if (e.target.closest('a, button, .card, .hoverable')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);


  return (
  <AuthProvider>
    <Router>
      <div
          className={`custom-cursor ${hovered ? 'hovered' : ''}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
      <div className="min-h-screen bg-[#fffdf7] text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route  path="/add-meal"  element={<RequireChef><AddMeal /></RequireChef>  }/>
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order" element={<OrderNow />} />
          <Route
  path="/my-meals"
  element={
    <RequireChef>
      <MyMeals />
    </RequireChef>
  }
/>
          
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
