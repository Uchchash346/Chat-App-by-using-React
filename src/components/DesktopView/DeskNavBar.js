import React from 'react';
import "./DeskNavBar.css"
import { AiOutlineMenu, AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";


const DeskNavBar = () => {
    return (
        <div>
            <div class="wrapper">
                <div class="sidebar">
                    <h2><AiOutlineMenu class="text-white" /></h2>
                    <ul>
                        <li><a href="#"><AiOutlineHome class="react-icon-area text-white" /></a></li>
                        <li><a href="#"><AiOutlineMessage class="react-icon-area text-white" /></a></li>
                        <li><a href="#"><FiSettings class="react-icon-area text-white" /></a></li>
                        <li><a href="#" id="react-logout-icon"><RiLogoutBoxRLine class="react-icon-area text-white" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeskNavBar;