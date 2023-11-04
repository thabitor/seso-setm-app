import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>    
    <div className="footer-area footer-padding">
    <div className="container">
        <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                    <div className="footer-tittle">
                        <div className="footer-logo mb-20">
                            <a href="index.html"><img src="assets/img/logo/logo-seso-sm.jpg" alt=""/></a>
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
                                <p>26, Rue de Parme <br/>
1060 Saint-Gilles (Bruxelles)
Belgique</p>
                            </li>
                            <li><a href="#">Phone : 02 533 39 84</a></li>
                            <li><a href="#">Email : info@seso.be</a></li>
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
                                onblur="this.placeholder = ' Email Address '"/>
                                <div className="form-icon">
                                    <button type="submit" name="submit" id="newsletter-submit"
                                    className="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt=""/></button>
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
                        <a  href="https://www.facebook.com/SETM.asbl"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fas fa-globe"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>



</Fragment>
  )
}

export default Footer
