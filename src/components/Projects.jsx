import React, { useState, useEffect } from 'react';

const projectsData = [
  // Kamu bisa memindahkan data projek tambahanmu ke dalam format ini
  { img: '/packages/images/MindSpark.png', name: 'MindSpark : Intelligent Support for Healthier Thinking', description: 'An individualized and effective AI-powered mental health solution. (TOP 6 Capstone Project Coding Camp 2025)', link: '#' },
  { img: '/packages/images/FTTH.png', name: 'FTTH Network Setup & Management', description: 'FTTH network configuration, ranging from basic topology and OLT/ONT configuration to monitoring and troubleshooting.', link: '#' },
  { img: '/packages/images/load-balancing.jpg', name: 'Load Balancing Moodle E-Learning with High Availability', description: 'Distributing the load across multiple servers to ensure that the system remains responsive and available.', link: '#' },
  { img: '/packages/images/cicd', name: 'CI/CD pipeline (Continuous Integration/Continuous Deployment)', description: 'Automates the process of integrating code changes, running tests, and deploying applications.', link: '#' },
  { img: '/packages/images/terrapom.jpg', name: 'Infrastructure automation with Terraform', description: 'Using code to provision and manage infrastructure efficiently and consistently.', link: '#' },
  { img: '/packages/images/moodle.png', name: 'Create LMS for elementary school exams', description: 'Based on Moodle with Moodle, web-server Nginx, and database MariaDB.', link: '#' },
  { img: '/packages/images/nas.png', name: 'Proxmox installation with clustering', description: 'Setting up Proxmox VE on multiple nodes to create a cluster, and configuring shared storage using NAS for high availability and efficient resource management.', link: '#' },
  { img: '/packages/images/mikrodik.png', name: 'Router Configuration(Routing, Forwarding)', description: 'Just routing into a destination and forward it.', link: '#' },
  { img: '/packages/images/ssl.png', name: 'Create ssl and basic security', description: 'Vocational High School 2 Yogyakarta.', link: '#' },
  { img: '/packages/images/proxmox.png', name: 'Troubleshooting Clustering error', description: 'Proxmox Clustering Proxy error.', link: '#' },
  { img: '/packages/images/postdov.gif', name: 'Mail server with Postfix & Dovecot(LKS DIY)', description: 'Configuring Postfix as the Mail Transfer Agent (MTA) to handle sending and receiving emails, and Dovecot as the IMAP/POP3 server to manage email retrieval and storage.', link: '#' },
  { img: '/packages/images/pgsql.png', name: 'CMS and LMS with PostgreSQL database(LKS DIY)', description: 'Systems to use PostgreSQL as the backend database for storing and managing content and user data.', link: '#' },
  { img: '/packages/images/bind.jpg', name: 'Setting DNS with bind9(LKS DIY)', description: 'BIND software to act as a DNS server, managing domain name resolution for your network.', link: '#' },
  { img: '/packages/images/CA.jpeg', name: 'Certification Authority(CA) Windows Server(LKS DIY)', description: 'Configuring Active Directory Certificate Services (AD CS) to manage digital certificates for your organization.', link: '#' },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // Logika Responsif: HP = 2 item (2 baris), Tablet = 4 item, Desktop = 6 item (3 kolom x 2 baris)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 568) {
        setItemsPerPage(2);
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(4);
        setIsMobile(true);
      } else {
        setItemsPerPage(6);
        setIsMobile(false);
      }
    };

    handleResize(); // Panggil saat awal render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Mencegah error halaman kosong saat ukuran layar diubah
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = projectsData.slice(start, start + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My recent project</span>

      <div className="projects__container container">
        {paginatedProjects.map((project, index) => (
          <div key={index} className="projects__content">
            <img src={project.img} alt={project.name} className="projects__img" />
            <h3 className="projects__name">{project.name}</h3>
            <p className="projects__description">{project.description}</p>
            
            {/* Menampilkan tombol View More jika projek memiliki URL Link */}
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Baru */}
      <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '0.5rem' : '1.5rem', marginTop: '2.5rem' }}>
        <button 
          className="button button--flex button--small" 
          onClick={handlePrev} 
          disabled={currentPage === 1}
          style={{ 
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer', 
            opacity: currentPage === 1 ? 0.5 : 1,
            border: 'none', outline: 'none', fontFamily: 'inherit',
            padding: isMobile ? '0.5rem 0.75rem' : '',
            fontSize: isMobile ? '0.8rem' : ''
          }}
        >
          <i className="uil uil-angle-left-b button__icon" style={{ marginLeft: 0, marginRight: '0.25rem', fontSize: isMobile ? '1rem' : '' }}></i> 
          Prev
        </button>

        {/* Indikator Titik (Dots) */}
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span 
              key={idx} 
              onClick={() => setCurrentPage(idx + 1)}
              style={{
                display: 'inline-block',
                width: currentPage === idx + 1 ? '24px' : '8px',
                height: '8px',
                backgroundColor: currentPage === idx + 1 ? 'var(--first-color)' : 'var(--text-color-light)',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            ></span>
          ))}
        </div>

        <button 
          className="button button--flex button--small" 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
          style={{ 
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', 
            opacity: currentPage === totalPages ? 0.5 : 1,
            border: 'none', outline: 'none', fontFamily: 'inherit',
            padding: isMobile ? '0.5rem 0.75rem' : '',
            fontSize: isMobile ? '0.8rem' : ''
          }}
        >
          Next 
          <i className="uil uil-angle-right-b button__icon" style={{ fontSize: isMobile ? '1rem' : '' }}></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;