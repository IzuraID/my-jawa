import React from 'react';

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src="/packages/images/rands.jpg" alt="About" className="about__img" />
          <div className="about__data">
            <p className="about__description">
              System Administrator, with limited knowledge and experience, keep learning and stay enthusiastic, never give up:)
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">Years <br /> Experience</span>
              </div>
              <div>
                <span className="about__info-title">15+</span>
                <span className="about__info-name">Completed <br /> Certifications</span>
              </div>
              <div>
                <span className="about__info-title">01</span>
                <span className="about__info-name">Companies<br /> Worked</span>
              </div>
            </div>

            <div className="about__buttons">
              <a href="/packages/pdf/CV_RandiDwiNurC.pdf" target="_blank" rel="noreferrer" className="button button--flex">
                Lihat CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;