import React, { useState } from 'react';

const Skills = () => {
  // State untuk menyimpan index skill yang sedang terbuka (0 = Sysadmin)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSkill = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const skillCategories = [
    {
      title: 'System Administrator',
      subtitle: 'More than 2 years',
      icon: 'uil-servers',
      skills: [
        { name: 'Operating System', icon: 'uil-setting' },
        { name: 'Network Administration', icon: 'uil-share-alt' },
        { name: 'Scripting and Automation', icon: 'uil-file-graph' },
        { name: 'Database Management', icon: 'uil uil-database-alt' },
        { name: 'Cloud Computing', icon: 'uil uil-cloud-database-tree' },
        { name: 'Cyber Security', icon: 'uil uil-shield-check' },
      ]
    },
    {
      title: 'Network Engineer',
      subtitle: 'More than 1 years',
      icon: 'uil-globe',
      skills: [
        { name: 'Architecture Design(LAN)', icon: 'uil-sitemap' },
        { name: 'Basic Routing Concept', icon: 'uil-arrow-random' },
        { name: 'Traffic Monitoring', icon: 'uil uil-monitor-heart-rate' },
      ]
    },
    {
      title: 'Web Developer',
      subtitle: 'More than 1 years',
      icon: 'uil-globe',
      skills: [
        { name: 'HTML', icon: 'uil uil-html5' },
        { name: 'CSS', icon: 'uil uil-css3-simple' },
        { name: 'JS', icon: 'uil uil-java-script' },
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {skillCategories.map((category, index) => (
            <div key={index} className={`skills__content ${openIndex === index ? 'skills__open' : 'skills__close'}`}>
              <div className="skills__header" onClick={() => toggleSkill(index)}>
                <i className={`uil ${category.icon} skills__icon`}></i>
                <div>
                  <h1 className="skills__title">{category.title}</h1>
                  <span className="skills__subtitle">{category.subtitle}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">{skill.name}</h3>
                      <i className={`uil ${skill.icon}`}></i>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__opsys"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;