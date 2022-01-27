import React from 'react';
import './MainHomePage.css';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainHomePage = () => {
    return (
        <div className="button-area">
            {/* <Link to="../DesktopView/DeskHome.js">
            </Link> */}
            <Link to="/desktop"><button type="button" className="btn btn-outline-primary btn-lg mx-2" href="/desktop"><FaDesktop />Desktop View</button></Link>
            
            <button type="button" className="btn btn-outline-success btn-lg mx-2"><FaMobileAlt />Mobile View</button>
            <p className="text-center pt-2">N.B: For mobile view, please click the right mouse and click the inspect and chose the mobile responsive version</p>
        </div>
    );
};

export default MainHomePage;