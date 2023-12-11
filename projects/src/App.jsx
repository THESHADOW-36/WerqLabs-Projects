// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from './Components/Homepage';
import Login from './Components/muiForm/Login';
import Register from './Components/muiForm/Register';
import SignUp from './Components/form/signUp/SignUp';
import SignIn from './Components/form/signIn/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
