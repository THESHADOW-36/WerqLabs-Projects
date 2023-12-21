// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CheckIn from './components/CheckIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/check-in' element={<CheckIn />} />
      </Routes>
    </div>
  );
}

export default App;
