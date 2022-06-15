import React from 'react';

import axios from 'axios';
import $ from 'jquery'

import Rapport_template from '../../components/Front/Rapport_template.component';
import Categorie from '../../components/Front/Categorie';
import Rapport_modification from "../../components/Front/Rapport_modification.component";
import Authentification from "../../components/Front/Authentification.component";
import AddTemplate from "../../components/Back/AddTemplate.component";
import AllTemplate from "../../components/Back/AllTemplatte.component";
import NavBarComponent from "../../components/NavBar/Navbar.component";
import ListCategorie from "../../components/Back/ListCategorie.component";
import AddCategorie from "../../components/Back/AddCategorie.component";

import { Switch, Routes, BrowserRouter, Route, Router } from 'react-router-dom';
import SidebarComponent from '../SideBar/sidebar.component';
import ArchiveAdmin from '../Back/ArchiveAdmin.component';
import Validategroup from '../Back/Validategroup.component';


export default class HeaderBack extends React.Component {


    componentDidMount() {
        $(".front").attr("disabled", "disabled");
        $(".back").removeAttr("disabled");
      }

    render() {
        return (


            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">



                    <div id="sidebar" className="users p-chat-user showChat">
                        <div className="had-container">
                            <div className="card card_main p-fixed users-main">
                                <div className="user-box">
                                    <div className="chat-inner-header">
                                        <div className="back_chatBox">
                                            <div className="right-icon-control">
                                                <input type="text" className="form-control  search-text" placeholder="Search Friend" id="search-friends" />
                                                <div className="form-icon">
                                                    <i className="icofont icofont-search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-friend-list">
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius img-radius" src="libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image " />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Josephin Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="libraries\assets\images\avatar-2.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Lary Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="libraries\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alice</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alia</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="libraries\assets\images\avatar-2.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Suzen</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="showChat_inner">
                        <div className="media chat-inner-header">
                            <a className="back_chatBox">
                                <i className="feather icon-chevron-left"></i> Josephin Doe
                            </a>
                        </div>
                        <div className="media chat-messages">
                            <a className="media-left photo-table" href="#!">
                                <img className="media-object img-radius img-radius m-t-5" src="libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
                            </a>
                            <div className="media-body chat-menu-content">
                                <div className="">
                                    <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                        </div>
                        <div className="media chat-messages">
                            <div className="media-body chat-menu-reply">
                                <div className="">
                                    <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                            <div className="media-right photo-table">
                                <a href="#!">
                                    <img className="media-object img-radius img-radius m-t-5" src="libraries\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                                </a>
                            </div>
                        </div>
                        <div className="chat-reply-box p-b-20">
                            <div className="right-icon-control">
                                <input type="text" className="form-control search-text" placeholder="Share Your Thoughts" />
                                <div className="form-icon">
                                    <i className="feather icon-navigation"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <nav className="pcoded-navbar">
                                <div className="pcoded-inner-navbar main-menu">
                                    <div className="pcoded-navigatio-lavel">Navigation</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="">
                                            <a href="">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Dashboard</span>
                                            </a>
                                            
                                        </li>
                                        <li className="">
                                            <a href="">
                                                <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                                                <span className="pcoded-mtext">Archives</span>            
                                            </a> 
                                        </li>
                                        <li className="">
                                            <a href="http://localhost:3000/AllTemplate">
                                                <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                                                <span className="pcoded-mtext">Templates</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="">
                                                <span className="pcoded-micon"><i className="feather icon-users"></i></span>
                                                <span className="pcoded-mtext">Profiles</span>
                                                
                                            </a>
                                            
                                        </li>
                                        <li className="">
                                            <a href="http://localhost:3000/categoriesAdmin">
                                                <span className="pcoded-micon"><i className="feather icon-grid"></i></span>
                                                <span className="pcoded-mtext">Categories</span>
                                                
                                            </a>
                                            
                                        </li>
                                    </ul>
                                    
                                       
                                        
                                   
                                    
                                </div>
                            </nav>
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <div className="main-body">
                                        <div className="page-wrapper">

                                            <div className="page-body">

                                                <a className="mobile-menu" id="mobile-collapse" href="#!" style={{  float:'right' }} >
                                                    <i className="feather icon-menu" style={{ fontSize: '2.73em' }}></i>
                                                </a>

                                                <Routes>
                                                
                                                <Route exact path = '/categoriesAdmin' element= {< ListCategorie />}></Route>
                                               
                                                <Route exact path="/add" element={< AddCategorie />}></Route>
                                                
                                                <Route exact path='/Authentification' element={< Authentification />}></Route>
                    

                                                    <Route exact path='/AddTemplate' element={< AddTemplate />}></Route>
                                                    <Route exact path='/AllTemplate' element={< AllTemplate />}></Route>
                                                    <Route exact path='/AllArchives' element={< ArchiveAdmin />}></Route>
                                                    <Route exact path='/Corilusgroups' element={< Validategroup />}></Route>

                                                </Routes>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}