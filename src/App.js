import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeskHome from './components/DesktopView/DeskHome';
import MainHomePage from './components/MainHomePage/MainHomePage';
import MobileHomePage from './components/MobileView/MobileHomePage/MobileHomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/desktop" element={<DeskHome />} />
        <Route path="/mobile" element={<MobileHomePage />} />
      </Routes>
    </>
  );
}

export default App;
