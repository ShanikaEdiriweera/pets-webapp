import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/home';
import Directory from "./pages/directory";
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header>
        <nav
          className="navbar"
          role="navigation"
        >
          <img
            src={ 'icons/pet-icon.svg' }
            alt='Pets Application Logo'
            className="logo"
            onClick={ () => navigate("/") }
            onKeyUp={ () => navigate("/") }
          />
          <img
            src={ 'icons/pet-icon-small.svg' }
            alt='Pets Application Logo'
            className="logo-mobile"
            onClick={ () => navigate("/") }
          />
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="directory" element={<Directory />} />
        </Routes>
      </main>


      {/* Footer Component */}
      <footer className="footer">
      </footer>
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
