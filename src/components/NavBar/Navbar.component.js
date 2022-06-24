import React from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class NavBarComponent extends React.Component {



    state = {
        categories: []

    }

    componentDidMount() {





        axios.get(`https://localhost:7103/Categorie/GetAll/`)

            .then(res => {

                const categories = res.data;

                this.setState({ categories });
            })
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 className="m-0"> <img width="80" height="80" src={process.env.PUBLIC_URL + '/logo.png'} /></h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to={'/'} className="nav-item nav-link"> Accueil </NavLink>


                        <NavLink to={'/apropos'} className="nav-item nav-link"> A Propos </NavLink>

                        <NavLink to={'/Contact'} className="nav-item nav-link"> Contacts </NavLink>


                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mes archives</a>
                            <div className="dropdown-menu bg-light m-0">

                                {this.state.categories.map(categorie =>
                                    <NavLink to={'/MesArchives'} className="dropdown-item"> {categorie.libelle} </NavLink>

                                )}

                            </div>
                        </div>

                        {sessionStorage.getItem("Token") != null ?
                            <NavLink to={'/profil'} className="nav-item nav-link"> Profil </NavLink>
                            :
                            <NavLink to={'/profil'} style={{ display:'none' }} className="nav-item nav-link"> Profil </NavLink>
                        }



                        {sessionStorage.getItem("Token") == null ?

                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Connexion</a>
                                <div className="dropdown-menu bg-light m-0">
                                    <NavLink to={'/Authentification'} className="dropdown-item"> Se connecter </NavLink>
                                    <NavLink to={'/inscription'} className="dropdown-item"> S'inscrire </NavLink>

                                </div>
                            </div>

                            :
                            <NavLink to={'/Authentification'} className="nav-item nav-link"> Déconnexion </NavLink>


                        }

                    </div>



                    <NavLink to={'/Categories'} className="btn btn-primary3 py-4 px-lg-5 d-none d-lg-block"> Génération Rapport <i className="fa fa-arrow-right ms-3"></i> </NavLink>


                </div>
            </nav>


        )

    }
}


