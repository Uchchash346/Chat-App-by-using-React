import React from 'react';
import './DeskHeader.css';
import { CgMenuGridR } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";
import { FaArrowDown } from "react-icons/fa";
import image1 from "../../../images/image1.png"
// FaArrowDown

const DeskHeader = () => {
    return (
        <div className="header-area mt-4">
            <div class="row">
                <div class="col">
                <span className="chat-text">Chat</span><CgMenuGridR className="menu-icon" /><span className="sort-text">Sort</span>
                </div>
                <div class="col mt-4">
                    <VscBellDot className="menu-icon" /><span><img src={image1} alt="" className="ms-3 user-image-area" /></span><span className="user-name">Prakash</span><FaArrowDown className="ms-3" />
                    
                </div>
            </div>
        </div>

    );
};

export default DeskHeader;