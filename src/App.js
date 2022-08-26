import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav
        className="navbar"
      >
        <img src={ 'icons/pet-icon.svg' } alt='Pets Logo' className="logo" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      {/* Footer Component */}

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
