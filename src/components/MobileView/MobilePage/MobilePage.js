/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './MobilePage.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import image8 from "../../../images/image8.png"
import image9 from "../../../images/image9.png"

// GiHamburgerMenu
const MobilePage = () => {
    return (
        <div>
            <div className="container">
                <a href="/" className="container pt-4 text-green text-bold text-lg"> Home Page <AiOutlineArrowRight /> </a>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="card mt-5">
                    <a href="">
                        <div className="d-flex flex-row justify-content-between p-3 adiv text-white"> <GiHamburgerMenu /> <span className="pb-3">Messages</span> <i className=""></i> </div>
                    </a>
                    <div className="d-flex flex-row p-3"> <img src={image9} width="30" height="30" />
                        <div className="chat ml-2 p-3">Hello, Prakash How are you? <br /> 8:00 AM </div>
                    </div>
                    <div className="d-flex flex-row p-3">
                        <div className="bg-white mr-2 p-3"><span className="text-muted">Hii, I’m Fine and what about you? <br /> 8:00 AM</span></div> <img src={image8} width="30" height="30" />
                    </div>
                    <div className="d-flex flex-row p-3"> <img src={image9} width="30" height="30" />
                        <div className="chat ml-2 p-3">Hii, I’m also fine Can you join the metting? <br /> 8:00 AM </div>
                    </div>
                    <div className="d-flex flex-row p-3">
                        <div className="bg-white mr-2 p-3"><span className="text-muted">Yaa, Sure <br /> 8:01 AM</span></div> <img src={image8} width="30" height="30" />
                    </div>
                    <div className="d-flex flex-row p-3"> <img src={image9} width="30" height="30" />
                        <div className="chat ml-2 p-3">Why you leave the metting? Can you join the metting again? <br /> 8:11 AM </div>
                    </div>
                    <div className="d-flex flex-row p-3">
                        <div className="bg-white mr-2 p-3"><span className="text-muted">Sorry, I have network issue <br /> 8:11 AM</span></div> <img src={image8} width="30" height="30" />
                    </div>
                    <div className="form-group px-3"> <textarea className="form-control" rows="5" placeholder="Type your message"></textarea> </div>
                </div>
            </div>
        </div>
    );
};
export default MobilePage;