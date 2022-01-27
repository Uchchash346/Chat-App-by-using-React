import React from 'react';
import './MainHomePage.css';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainHomePage = () => {
    return (
        <div className="button-area">
            <Link to="/desktop"><button type="button" className="btn btn-outline-primary btn-lg mx-2" href="/desktop"><FaDesktop />Desktop View</button></Link>
            <Link to="/mobile"><button type="button" className="btn btn-outline-success btn-lg mx-2" ><FaMobileAlt />Mobile View</button></Link>
        </div>
    );
};

export default MainHomePage;