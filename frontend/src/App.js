import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Nigga from './nigga'; // Corrected component name
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    </div>
  );
}

function PageLayout() {
  let location = useLocation();
  const [user, setLoginUser] = useState({});
  const showNavbar = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register";
  return (
    <>
      {showNavbar && <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Nigga />} />
          <Route path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
