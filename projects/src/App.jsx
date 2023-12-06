// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
