import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Nigga from './nigga'; // Corrected component name

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

  return (
    <>
      {location.pathname !== "/" && <Navbar />} {/* Conditional rendering */}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Nigga />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
