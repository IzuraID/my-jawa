import React from 'react';

const ProjectInMind = () => {
  return (
    <section className="project section" style={{ paddingTop: '2rem', paddingBottom: '1rem', marginBottom: '2rem' }}>
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project/problem?</h2>
            <p className="project__description" style={{ marginBottom: '1.5rem' }}>
              Don't Contact me, I'm just a student with little experience. Just Kidding, we can try together😅
            </p>
            <a 
              href="#contact" 
              className="button button--flex button--white"
            >
              Contact me
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInMind;