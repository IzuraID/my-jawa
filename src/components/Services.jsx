import React, { useState } from 'react';

const Services = () => {
  const [activeModal, setActiveModal] = useState(0);

  const toggleModal = (index) => {
    setActiveModal(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        
        {/*==================== SERVICES 1 ====================*/}
        <div className="services__content">
          <div>
            <i className="uil uil-server-alt skills__icon"></i>
            <h3 className="services__title">Sysadmin<br /></h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => toggleModal(1)}>
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className={activeModal === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">System Administrator<br /></h4>
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Installation and configuration of servers and services.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Monitoring and maintenance System.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Firewall settings and access management.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Regular and structured backups.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Scripting and automation task.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*==================== SERVICES 2 ====================*/}
        <div className="services__content">
          <div>
            <i className="uil uil-channel skills__icon"></i>
            <h3 className="services__title">Networking<br /></h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => toggleModal(2)}>
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className={activeModal === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">Network Engineer<br /></h4>
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Network planning and installation.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Routing and Switching.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Load balancing for network usage.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Monitoring activity and logs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*==================== SERVICES 3 ====================*/}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Web Dev<br /></h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => toggleModal(3)}>
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className={activeModal === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">Web Developer<br /></h4>
              <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Create a personal website.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Building an e-commerce website.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Developing someone else's code.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Clonning Website</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;