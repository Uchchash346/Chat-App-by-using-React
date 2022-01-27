import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeskHome from './components/DesktopView/DeskHome';
import MainHomePage from './components/MainHomePage/MainHomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/desktop" element={<DeskHome />} />
      </Routes>
    </>
  );
}

export default App;
