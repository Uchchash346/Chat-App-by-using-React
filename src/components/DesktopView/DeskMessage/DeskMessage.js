import React from 'react';
import './DeskMessage.css';
import { BsSearch } from "react-icons/bs";
import image1 from '../../../images/image1.png';
import image2 from '../../../images/image2.png';
import image3 from '../../../images/image3.png';
import image4 from '../../../images/image4.png';
import image5 from '../../../images/image5.png';
import image6 from '../../../images/image6.png';
import image7 from '../../../images/image7.png';
import image8 from '../../../images/image8.png';
import image9 from '../../../images/image9.png';
import image10 from '../../../images/image10.png';
// BsSearch
const DeskMessage = () => {
    return (
        <div className="message-area">
            <div class="container message-body mt-4">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <div id="plist" class="people-list">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text search-area"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search..." />
                                </div>
                                <ul class="list-unstyled chat-list mt-2 mb-0">
                                    <li class="clearfix">
                                        <img src={image2} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Esther Howard</div>
                                            <div class="status">  Off course, I can </div>
                                        </div>
                                    </li>
                                    <li class="clearfix active">
                                        <img src={image3} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Marvin McKinney<span className="time-duration">1 min</span></div>
                                            <div class="status"> That's great </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image4} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Kathryn Murphy <span className="time-duration">1 min</span></div>
                                            <div class="status">  Counting your slot... </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image5} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Floyd Miles <span className="time-duration">10 min</span></div>
                                            <div class="status">  let me know... </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image6} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Albert Flores <span className="time-duration">2 Days</span></div>
                                            <div class="status">  All faith needs feet... </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image7} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Brooklyn Simmon <span className="time-duration">3 Days</span></div>
                                            <div class="status">  Glad to hear from you... </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image8} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Kristin Watson <span className="time-duration">1 Week</span></div>
                                            <div class="status">  Esther Howard </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image9} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Savanah Ngyen <span className="time-duration">3 Weeks</span></div>
                                            <div class="status">  Esther Howard </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image10} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Annette Black <span className="time-duration">3 Weeks</span></div>
                                            <div class="status">  Esther Howard </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <img src={image6} alt="avatar" />
                                        <div class="about">
                                            <div class="name">Albert Flores <span className="time-duration">2 Days</span></div>
                                            <div class="status">  All faith needs feet... </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="chat">
                                <div class="chat-header clearfix">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                                <img src={image2} alt="avatar" />
                                            </a>
                                            <div class="chat-about">
                                                <h6 class="m-b-0">Esther Howard</h6>
                                                <small><span><i class="fa fa-circle online"></i></span> Active Now</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-history">
                                    <ul class="m-b-0">

                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:12 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Hii Prakash ! Feels like it’s been a while! How are you? Do you have any time for the remainder of the week to help me with an ongoing project?</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                {/* <span class="message-data-time">10:10 AM, Today</span> */}
                                                <img src={image1} alt="avatar" className="first-message-area" />
                                            </div>
                                            <div class="message other-message float-right"> Hii Easther, glad to hear from you, I’m fine, What about you? and how it’s going with the velocity website? off cours, I’ll help with this project</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                <span class="message-data-time">10:15 AM, Today</span>
                                            </div>
                                            <div class="message my-message">Super, I’ll get you the new brief for our own site over to you this evening, so you have time to read over I’m good thank you!</div>
                                        </li>
                                        <li class="clearfix">
                                            <div class="message-data">
                                                {/* <span class="message-data-time">10:10 AM, Today</span> */}
                                                <img src={image1} alt="avatar" className="first-message-area" />
                                            </div>
                                            <div class="message other-message float-right"> Of course I can, just catching up with steve on it and I’ll write out. Speak tomorrow! Let me know if you have any questions!</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="chat-message clearfix">
                                    <div class="input-group mb-0">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text submit-area"><i class="fa fa-send"></i></span>
                                        </div>
                                        <input type="text" class="form-control " placeholder="Enter text here..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeskMessage;