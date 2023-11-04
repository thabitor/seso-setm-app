
import React from "react";

function PageLoader() {

    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src="/assets/img/logo/logo-seso18-9-19.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLoader;