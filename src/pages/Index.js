import react from "react";
import { Fragment } from "react";

function Index() {

    return (
        <Fragment>
            <div className="slider-area">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="column">
                                <div className="col-xl-12 col-lg-6 col-md-8 col-sm-10">
                                    <div className="hero__caption">
                                        <h1 data-animation="fadeInUp" data-delay=".6s"> Solidaires pour un Avenir Meilleur </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                                    <div className="hero__caption">

                                        <div className="hero__btn">
                                            <a href="industries.html" className="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                                            <a href="industries.html" className="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                                                <i className="flaticon-null"></i>
                                                <p>+12 1325 41</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
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

            <section className="about-low-area section-padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-caption mb-50">

                                <div className="section-tittle mb-35">
                                    <span>Qui sommes-nous ?</span>
                                    <h2>Contre les inégalités sociales et les discriminations.</h2>
                                </div>
                                <div>
                                    <p>
                                        Le SESO est une organisation belge qui lutte contre les inégalités sociales et les discriminations. Nous sommes convaincus que chacun a le droit de vivre dans une société juste et équitable, et nous travaillons pour rendre cela possible.
                                        <p>Nous nous concentrons sur trois domaines principaux :</p>
                                        <ul>
                                            <li><p><b>Lutter contre les violences conjugales et intrafamiliales.</b> Nous soutenons les victimes, sensibilisons le public et travaillons à la prévention de ces violences.</p></li>
                                            <li><p><b>Promouvoir l'inclusion des personnes migrantes et réfugiées.</b> Nous luttons contre les préjugés et les discriminations, et nous travaillons à favoriser l'intégration des personnes migrantes et réfugiées dans la société belge.</p></li>
                                            <li><p><b>Promouvoir la participation citoyenne.</b> Nous encourageons les citoyens à s'impliquer dans la vie démocratique et à faire entendre leur voix.</p></li>
                                        </ul>
                                    </p>
                                    <p>Le SESO est une organisation pluraliste et indépendante. Nous sommes financés par des fonds publics et privés, et nous comptons plus de 200 membres associatifs.

                                        Notre équipe est composée de professionnels qualifiés et passionnés. Nous travaillons en étroite collaboration avec les pouvoirs publics, les associations et les citoyens pour construire une société plus juste et plus équitable.

                                        Ensemble, nous pouvons faire la différence !</p>
                                </div>

                            </div>
                            <a href="about.html" className="btn">En savoir plus</a>
                        </div>
                        <div className="col-lg-6 col-md-12">

                            <div className="about-img ">
                                <img src="public/assets/img/gallery/about-brussels-seso-sm.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="our-cases-area section-padding30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">

                            <div className="section-tittle text-center mb-80">
                                <span>Our Cases you can see</span>
                                <h2>Explore our latest causes that we works </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cases mb-40">
                                <div className="cases-img">
                                    <img src="public/assets/img/gallery/case1.png" alt="" />
                                </div>
                                <div className="cases-caption">
                                    <h3><a href="#">Ensure Education For Every Poor Children</a></h3>

                                    <div className="single-skill mb-15">
                                        <div className="bar-progress">
                                            <div id="bar1" className="barfiller">
                                                <div className="tipWrap">
                                                    <span className="tip"></span>
                                                </div>
                                                <span className="fill" data-percentage="70"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cases mb-40">
                                <div className="cases-img">
                                    <img src="public/assets/img/gallery/case2.png" alt="" />
                                </div>
                                <div className="cases-caption">
                                    <h3><a href="#">Providing Healthy Food For The Children</a></h3>

                                    <div className="single-skill mb-15">
                                        <div className="bar-progress">
                                            <div id="bar2" className="barfiller">
                                                <div className="tipWrap">
                                                    <span className="tip"></span>
                                                </div>
                                                <span className="fill" data-percentage="25"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-cases mb-40">
                                <div className="cases-img">
                                    <img src="public/assets/img/gallery/case3.png" alt="" />
                                </div>
                                <div className="cases-caption">
                                    <h3><a href="#">Supply Drinking Water For  The People</a></h3>

                                    <div className="single-skill mb-15">
                                        <div className="bar-progress">
                                            <div id="bar3" className="barfiller">
                                                <div className="tipWrap">
                                                    <span className="tip"></span>
                                                </div>
                                                <span className="fill" data-percentage="50"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="featured-job-area section-padding30 section-bg2" data-background="public/assets/img/gallery/section_bg03.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">

                            <div className="section-tittle text-center mb-80">
                                <span>What we are boing</span>
                                <h2>We arrange many social events for charity donations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-12">

                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="public/assets/img/gallery/socialEvents1.png" alt="" /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>Donation is Hope</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">

                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="public/assets/img/gallery/socialEvents2.png" alt="" /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>A hand for Children</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">

                            <div className="single-job-items mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="#"><img src="public/assets/img/gallery/socialEvents3.png" alt="" /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#"><h4>Help for Children</h4></a>
                                        <ul>
                                            <li><i className="far fa-clock"></i>8:30 - 9:30am</li>
                                            <li><i className="fas fa-sort-amount-down"></i>18.01.2021</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="team-area pt-160 pb-160">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">

                            <div className="section-tittle section-tittle2 text-center mb-70">
                                <span>What we are doing</span>
                                <h2>Our Expert Volunteer Alwyes ready</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="public/assets/img/gallery/team1.png" alt="" />

                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="instructor.html">Bruce Roberts</a></h3>
                                    <p>Volunteer leader</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="public/assets/img/gallery/team2.png" alt="" />

                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="instructor.html">Robart Rechard</a></h3>
                                    <p>Volunteer leader</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="public/assets/img/gallery/team3.png" alt="" />

                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="instructor.html">Brendon Tailor</a></h3>
                                    <p>Volunteer leader</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src="public/assets/img/gallery/team4.png" alt="" />

                                    <ul className="team-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-caption">
                                    <h3><a href="instructor.html">Walshr Hasgt</a></h3>
                                    <p>Volunteer leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="wantToWork-area ">
                <div className="container">
                    <div className="wants-wrapper w-padding2  section-bg" data-background="public/assets/img/gallery/section_bg01.png">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-5 col-lg-9 col-md-8">
                                <div className="wantToWork-caption wantToWork-caption2">
                                    <h2>Lets Chenge The World With Humanity</h2>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4">
                                <a href="#" className="btn white-btn f-right sm-left">Become A Volunteer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="testimonial-area testimonial-padding">
                <div className="container">

                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <div className="h1-testimonial-active dot-style">

                                <div className="single-testimonial text-center">
                                    <div className="testimonial-caption ">

                                        <div className="testimonial-founder">
                                            <div className="founder-img mb-40">
                                                <img src="public/assets/img/gallery/testimonial.png" alt="" />
                                                <span>Margaret Lawson</span>
                                                <p>Creative Director</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-top-cap">
                                            <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-testimonial text-center">
                                    <div className="testimonial-caption ">

                                        <div className="testimonial-founder">
                                            <div className="founder-img mb-40">
                                                <img src="public/assets/img/gallery/testimonial.png" alt="" />
                                                <span>Margaret Lawson</span>
                                                <p>Creative Director</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-top-cap">
                                            <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-testimonial text-center">
                                    <div className="testimonial-caption ">

                                        <div className="testimonial-founder">
                                            <div className="founder-img mb-40">
                                                <img src="public/assets/img/gallery/testimonial.png" alt="" />
                                                <span>Margaret Lawson</span>
                                                <p>Creative Director</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-top-cap">
                                            <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="home-blog-area section-padding30">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                            <div className="section-tittle text-center mb-90">
                                <span>Our recent blog</span>
                                <h2>Latest News from our recent blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="home-blog-single mb-30">
                                <div className="blog-img-cap">
                                    <div className="blog-img">
                                        <img src="public/assets/img/gallery/home-blog1.png" alt="" />

                                        <div className="blog-date text-center">
                                            <span>24</span>
                                            <p>Now</p>
                                        </div>
                                    </div>
                                    <div className="blog-cap">
                                        <p>Creative derector</p>
                                        <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="home-blog-single mb-30">
                                <div className="blog-img-cap">
                                    <div className="blog-img">
                                        <img src="public/assets/img/gallery/home-blog2.png" alt="" />

                                        <div className="blog-date text-center">
                                            <span>24</span>
                                            <p>Now</p>
                                        </div>
                                    </div>
                                    <div className="blog-cap">
                                        <p>Creative derector</p>
                                        <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="count-down-area pt-25 section-bg" data-background="public/assets/img/gallery/section_bg02.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="count-down-wrapper" >
                                <div className="row justify-content-between">
                                    <div className="col-lg-3 col-md-6 col-sm-6">

                                        <div className="single-counter text-center">
                                            <span className="counter color-green">6,200</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Donation</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">

                                        <div className="single-counter text-center">
                                            <span className="counter color-green">80</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Fund Raised</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">

                                        <div className="single-counter text-center">
                                            <span className="counter color-green">256</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Donation</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">

                                        <div className="single-counter text-center">
                                            <span className="counter color-green">256</span>
                                            <span className="plus">+</span>
                                            <p className="color-green">Donation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer>
                <div className="footer-wrapper section-bg2" data-background="public/assets/img/gallery/footer_bg.png">

                    <div className="footer-area footer-padding">
                        <div className="container">
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-30">
                                            <div className="footer-tittle">
                                                <div className="footer-logo mb-20">
                                                    <a href="index.html"><img src="public/assets/img/logo/logo2_footer.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li>
                                                    <p>Address :Your address goes here, your demo address.</p>
                                                </li>
                                                <li><a href="#">Phone : +8880 44338899</a></li>
                                                <li><a href="#">Email : info@colorlib.com</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Important Link</h4>
                                            <ul>
                                                <li><a href="#"> View Project</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Testimonial</a></li>
                                                <li><a href="#">Proparties</a></li>
                                                <li><a href="#">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Newsletter</h4>
                                            <div className="footer-pera footer-pera2">
                                                <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                                            </div>

                                            <div className="footer-form" >
                                                <div id="mc_embed_signup">
                                                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                        method="get" className="subscribe_form relative mail_part">
                                                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                                            className="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                                            onblur="this.placeholder = ' Email Address '" />
                                                        <div className="form-icon">
                                                            <button type="submit" name="submit" id="newsletter-submit"
                                                                className="email_icon newsletter-submit button-contactForm"><img src="public/assets/img/gallery/form.png" alt="" /></button>
                                                        </div>
                                                        <div className="mt-10 info"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-xl-10 col-lg-9 ">
                                        <div className="footer-copy-right">
                                            <p>
                                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Services Social des Solidarités </p>
                                            <p>This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-3">
                                        <div className="footer-social f-right">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.facebook.com/SETM.asbl"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fas fa-globe"></i></a>
                                            <a href="#"><i className="fab fa-behance"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Index;