import React from "react";

const Home = () => {
  return (
    <>
      <header id="header" className="fixed-top "></header>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>For the clarification Of projects</h1>
              <h2>
                Systematically analysis the business/project to the system for
                support
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started scrollto">
                  Get started
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cliens" className="cliens section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="../../../publi/assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src="" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="../../../publi/assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>

            {/* <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="../../../publi/assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div> */}

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="../../../publi/assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="../../../publi/assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
