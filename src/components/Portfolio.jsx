import React, { useState, useEffect } from 'react';

const portfolioData = [
  {
    img: '/packages/images/LDAP.png',
    title: 'Instalasi dan Konfigurasi LDAP | LKS DIY 2026',
    description: 'LDAP adalah protokol untuk manajemen informasi dalam sebuah direktori. Adapun informasi di dalamnya meliputi data pengguna, grup, atau perangkat.',
    link: 'https://medium.com/@ran.izura/instalasi-dan-konfigurasi-ldap-lks-diy-2026-8085911d11ca'
  },
  {
    img: '/packages/images/HAProxy.png',
    title: 'Configuration Haproxy Load Balancer | LKS DIY 2026',
    description: 'HAProxy (High Availability Proxy) is open-source software that operates as a reverse proxy and load balancer for TCP and HTTP applications',
    link: 'https://medium.com/@ran.izura/configuration-haproxy-load-balancer-lks-diy-2026-46c3c090be7f'
  },
  {
    img: '/packages/images/wordpress.png',
    title: 'Wordpress installation',
    description: 'Installation Wordpress with Ubuntu-22.04. Using web server Apache and database MySQL.',
    link: 'https://medium.com/@ran.izura/wordpress-installation-on-ubuntu-server-936c270c2dd5'
  },
  {
    img: '/packages/images/FTPS.png',
    title: 'Konfigurasi FTP dengan aman menggunakan SSL (FTPS) dan pengetesan dengan metode Man in the middle attack (MITM)',
    description: 'FTPS (File Transfer Protocol Secure).',
    link: 'https://medium.com/@ran.izura/how-to-setup-configure-ftp-securely-using-ssl-4e35b5882d24'
  },
  {
    img: '/packages/images/pbs.webp',
    title: 'Backup VM Proxmox',
    description: 'Backup VM/CT Proxmox with Proxmox Backup Server(PBS). Is that software for backup Provmov VE.',
    link: 'https://medium.com/@ran.izura/backup-vm-proxmox-dengan-proxmox-backup-server-2eddab830b04'
  },
  {
    img: '/packages/images/jenkins.jpg',
    title: 'Jenkins Installation',
    description: 'Installation Jenkins with Ubuntu-22.04, Jenkins is a automation server open source.',
    link: 'https://medium.com/@ran.izura/installation-jenkins-on-ubuntu-22-04-1f24bf111488'
  }
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Logika Responsif: Layar HP = 1 Card per halaman, Desktop = 2 Card per halaman (Selalu 1 Baris)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize(); // Panggil saat awal render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  // Mencegah error halaman kosong saat ukuran layar diubah
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentItems = portfolioData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Blog</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="container" style={{ position: 'relative', padding: '0 2.5rem' }}>
        {/* Tombol Panah Kiri */}
        <i 
          className="uil uil-angle-left-b" 
          style={{ 
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            fontSize: '2.5rem', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', 
            opacity: currentPage === 1 ? 0.3 : 1, color: 'var(--title-color)'
          }}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        ></i>

        {/* Container Grid */}
        <div 
          className="portfolio__container grid"
          style={{ 
            gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`, 
            gap: '2rem', 
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}
        >
          {currentItems.map((item, index) => (
        <div 
            key={index} 
            className="portfolio__content"
            style={{
                backgroundColor: 'var(--container-color)',
                padding: '1.25rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                minWidth: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <img 
                src={item.img} 
                alt={item.title} 
                className="portfolio__img" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '0.75rem',
                  marginBottom: '1rem' 
                }} 
            />

            <div className="portfolio__data" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="portfolio__title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p className="portfolio__description" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button button--flex button--small portfolio__button"
                  style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                >
                  Read More
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
          </div>
        ))}
        </div>

        {/* Tombol Panah Kanan */}
        <i 
          className="uil uil-angle-right-b" 
          style={{ 
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            fontSize: '2.5rem', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', 
            opacity: currentPage === totalPages ? 0.3 : 1, color: 'var(--title-color)'
          }}
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        ></i>
      </div>

      {/* Indikator Titik (Dots Pagination) - Tambahan supaya lebih elegan */}
      {totalPages > 1 && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
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
                margin: '0 4px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;