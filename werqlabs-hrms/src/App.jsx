// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from './components/Homepage';
import Homepg from './components/Homepg';
import Login from './components/login/Login';
import EmployeesList from './components/employeesList/EmployeesList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hp" element={<Homepg />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/employees-list" element={<EmployeesList />} />
      </Routes>
    </div>
  );
}

export default App;