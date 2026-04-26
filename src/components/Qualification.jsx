import React, { useState } from 'react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div 
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div 
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* EDUCATION CONTENT */}
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} data-content id="education">
            {/* QUALIFICATION 1
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMPN 1 Sedayu</h3>
                <span className="qualification__subtitle">Kec. Sedayu, Kabupaten Bantul</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
            
            {/* QUALIFICATION 2 (Di Kanan) */}
            <div className="qualification__data">
              <div></div> {/* Div kosong ini yang mendorong konten ke sisi kanan */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SMKN 2 Yogyakarta</h3>
                <span className="qualification__subtitle">Kota Yogyakarta, Daerah Istimewa Yogyakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
              </div>
            </div>

            {/* QUALIFICATION 3 (Di Kiri) */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Universitas Negeri Yogyakarta</h3>
                <span className="qualification__subtitle">Sleman, Daerah Istimewa Yogyakarta</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 - ?
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* Tidak ada span "qualification__line" di item terakhir agar garis tidak kebablasan */}
              </div>
            </div>
          </div>

          {/* WORK CONTENT */}
          <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Coding Collective</h3>
                <span className="qualification__subtitle">Intern as Sysadmin/DevOps</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> March - December 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;