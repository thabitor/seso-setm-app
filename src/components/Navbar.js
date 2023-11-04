import React from 'react'
import { Link } from 'react-router-dom';
// import '../App.css'

function Navbar() {
    return (
        <>
            <div className="header-area">
                <div className="main-header">
                    <nav className="header-top d-none d-lg-block">
                        <div className="container-fluid">
                            <div className="col-xl-12">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="header-info-left d-flex">
                                        <ul>
                                            <li>02 533 39 84</li>
                                            <li>info@seso.be</li>
                                        </ul>
                                        <div className="header-social">
                                            <ul>
                                                <li className='social-item' >
                                                    <Link to='https://www.facebook.com/SETM.asbl' className='social-link'>
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li className='social-item' >
                                                    <Link to='https://www.facebook.com/SETM.asbl' className='social-link'>
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li className='social-item' >
                                                    <Link to='https://www.facebook.com/SETM.asbl' className='social-link'>
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li className='social-item' >
                                                    <Link to='https://www.facebook.com/SETM.asbl' className='social-link'>
                                                        <i className="fab fa-google-plus-g" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="header-info-right d-flex align-items-center">
                                        <div className="select-this nice-select">
                                            <form action="#">
                                                <div className="select-lang">
                                                    <select className="nice-select" name="select-lang" id="select1">
                                                        <option value="fr">fr</option>
                                                        <option value="nl">nl</option>
                                                        <option value="en">en</option>
                                                        <option value="es">es</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="header-bottom header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                    <Link to='/' className='navbar-logo' src='/assets/img/logo/logo-seso18-9-19.jpg'>
                        <img src='/assets/img/logo/logo-seso-sm.jpg'/>
                    </Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li className='nav-item' >
                                                        <Link to='/' className='nav-links'>
                                                            Qui sommes-nous ?
                                                        </Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link to='/'>
                                                                    Missions
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Historique
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Philosophie
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='nav-item' >
                                                        <Link to='/' className='nav-links'>
                                                            Nos services
                                                        </Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link to='/'>
                                                                    Service Social Général
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Accueil DPI (convention Ciré-Fédasil)
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Tutelles MENA
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Retour volontaire (REAB)
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='nav-item' >
                                                        <Link to='/' className='nav-links'>
                                                            Nos projets
                                                        </Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link to='/'>
                                                                    Culture
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Logement
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to='/'>
                                                                    Communautaire
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='nav-item' >
                                                        <Link to='/' className='nav-links'>
                                                            Nos partenaires
                                                        </Link>
                                                    </li>
                                                    <li className='nav-item' >
                                                        <Link to='/' className='nav-links'>
                                                            Contact
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar;
