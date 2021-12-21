import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Navbar2 from './components/navbar2/navbar2';
// import Menu from './components/menu/Menu';
// import Topbar from './components/topbar/Topbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* mi propuesta 1 */}
      {/* <Navbar /> */}
      {/* <Navbar2 />  */}
      {/* codigo de Frank */}
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Routes>
            <Route path="/" element={ <HomePage/>}  />
            <Route path="/about" element={<AboutPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
