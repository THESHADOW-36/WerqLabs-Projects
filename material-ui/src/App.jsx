// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import { Stack } from '@mui/material';
import MuiTextField from './components/MuiTextField';

function App() {
  return (
    <Stack className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/typography" element={<MuiTypography />} />
        <Route exact path="/button" element={<MuiButton />} />
        <Route exact path="/text-field" element={<MuiTextField />} />
      </Routes>
    </Stack>
  );
}

export default App;
