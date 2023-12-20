// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import Homepage from './components/Homepage';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiTextField from './components/MuiTextField';
import MuiSelect from './components/MuiSelect';

function App() {
  return (
    <Stack className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/typography" element={<MuiTypography />} />
        <Route exact path="/button" element={<MuiButton />} />
        <Route exact path="/text-field" element={<MuiTextField />} />
        <Route exact path="/select" element={<MuiSelect />} />
      </Routes>
    </Stack>
  );
}

export default App;
