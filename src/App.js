import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/home';
import Directory from "./pages/directory";
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <nav
        className="navbar"
      >
        <img
          src={ 'icons/pet-icon.svg' }
          alt='Pets Logo'
          className="logo"
          onClick={ () => navigate("/") }
        />
        <img
          src={ 'icons/pet-icon-small.svg' }
          alt='Pets Logo'
          className="logo-mobile"
          onClick={ () => navigate("/") }
        />
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="directory" element={<Directory />} />
        </Routes>
      </div>


      {/* Footer Component */}
      <div className="footer">
      </div>
    </div>
  );
}

function Profile() {
  return (
    <>
      <main>
        <h2>Pet Name</h2>
        <p>
          Pet Profile
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
