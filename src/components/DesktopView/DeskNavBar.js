import React from 'react';
import "./DeskNavBar.css"
import { AiOutlineMenu, AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";


const DeskNavBar = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <h2><AiOutlineMenu className="text-white" /></h2>
                    <ul>
                        <li><a href="#"><AiOutlineHome className="react-icon-area text-white" /></a></li>
                        <li><a href="#"><AiOutlineMessage className="react-icon-area text-white" /></a></li>
                        <li><a href="#"><FiSettings className="react-icon-area text-white" /></a></li>
                        <li><a href="#" id="react-logout-icon"><RiLogoutBoxRLine className="react-icon-area text-white" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeskNavBar;