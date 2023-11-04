import React from 'react'
// import '../../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>
        <div className="slider-area"> 
        <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container column">
                            <div className="hero__caption">
                                 <h1 data-animation="fadeInUp" data-delay=".6s"> Solidaires pour un Avenir Meilleur </h1>
                            </div>
                    </div>
                </div>
            </div>
           </div>
    <div className="service-area section-padding30">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <div className="section-tittle text-center mb-80">
                        <span>Nos services</span>
                        <h2>assistance humanitaire aux populations vulnérables</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-null-1"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Service Social Général</a></h5>
                            <p>Notre Service Social Général offre une aide sociale généraliste de première ligne aux personnes en difficulté.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon center">
                            <span className="flaticon-think"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Accueil DPI (convention Ciré-Fédasil)</a></h5>
                            <p>SESO a mis en place une structure d'accueil destinée aux demandeurs d'asile, dans le cadre d'une convention conclue avec Fedasil.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-gear"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Tutelles MENA</a></h5>
                            <p>Ce service s'occupe de la situation des Mineurs Etrangers Non Accompagnés (Mena).</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <span className="flaticon-briefcase"></span>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Retour volontaire (REAB)</a></h5>
                            <p>Notre Service Social travaille en partenariat avec l'OIM et aide son public à ouvrir un dossier de retour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home
