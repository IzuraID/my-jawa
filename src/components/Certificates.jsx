import React, { useState, useEffect } from 'react';

const certificatesData = [
  {
    img: '/packages/images/CCP.png',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2025',
    category: 'official', // Tambahkan properti kategori
    link: 'https://www.credly.com/badges/b943adfc-346b-4dd2-967f-51ab870a6a37/linked_in_profile?trk=public_profile_see-credential', // Tambahkan link sertifikat public kamu di sini
  },
  {
    img: '/packages/images/MTCNA.jpg',
    name: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    date: '2025',
    category: 'official',
    link: 'https://mikrotik.com/training/certificates/c456188c01d1bc9bbafa'
  },
  {
    img: '/packages/images/DBS.jpg',
    name: 'Machine Learning Engineer',
    issuer: 'DBS Foundation | Dicoding',
    date: '2025',
    category: 'official',
    link: '/packages/pdf/DBS.pdf'
  },
  {
    img: '/packages/images/LKS.png',
    name: 'Runner Up LKS Province Level ITNSA 2024',
    issuer: 'DIKPORA DIY',
    date: '2024',
    category: 'official',
  },
  {
    img: '/packages/images/BNSP.png',
    name: 'Data Center Technical Support Junior',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: '2025',
    category: 'official',
  },
  {
    img: '/packages/images/BDD.png',
    name: 'Baparekraf Developer Day 2024',
    issuer: 'Badan Ekraf | Dicoding',
    date: '2024',
    category: 'official',
  },
  {
    img: '/packages/images/Binance.jpg',
    name: 'Web3 University Tour',
    issuer: 'Binance Academy',
    date: '2026',
    category: 'course',
    link: 'https://drive.google.com/file/d/1d87cIsaeJ5nxgjvNyWuF1e93lfKagtc9/view?usp=sharing'
  },
  {
    img: '/packages/images/NetBas.png',
    name: 'Networking Basics',
    issuer: 'Cisco | Network Academy',
    date: '2024',
    category: 'course',
    link: 'https://www.credly.com/badges/83fe1237-1893-4822-9cc4-040e7607f588/linked_in_profile?trk=public_profile_see-credential'
  },
  {
    img: '/packages/images/SysAdm.png',
    name: 'Linux System Administration',
    issuer: 'Boer Technology (Btech)',
    date: '2023',
    category: 'course',
    link: 'https://adinusa.id/course/publisher/show/6ba1a6ab-4bc3-4bdc-b3ad-4ffe6e19d03e?trk=public_profile_see-credential'
  },
  {
    img: '/packages/images/SysAdm.png',
    name: 'Docker Fundamental',
    issuer: 'Boer Technology (Btech)',
    date: '2024',
    category: 'course',
    link: 'https://adinusa.id/course/publisher/show/6a6e66ef-f285-49a1-bac5-e00e7d696dbd'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Financial Literacy 101',
    issuer: 'DBS | Dicoding',
    date: '2025',
    category: 'course',
    link: 'http://dicoding.com/certificates/4EXG1VERQPRL'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Structured Query Language (SQL)',
    issuer: 'Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/NVP75W6MWXR0'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Fundamental Analisis Data',
    issuer: 'Google Developer | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/N9ZO90J3YXG5'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Fundamental Deep Learning',
    issuer: 'Google Developer | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/ERZRE7J9OXYV'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Dasar-Dasar DevOps',
    issuer: 'AWS | Dicoding',
    date: '2024',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/GRX5OV00KP0M'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Dasar Cloud dan Gen AI di AWS',
    issuer: 'AWS | Dicoding',
    date: '2024',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/0LZ06LG6NZ65'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Dasar AI',
    issuer: 'Google Dev Partner | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/0LZ0RJEONP65'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Machine Learning untuk Pemula',
    issuer: 'Google Cloud Partner | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/1RXYE60E1ZVM'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Pemrograman untuk Pengembang Software',
    issuer: 'Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/MEPJQM37JX3V'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Logika Pemrograman(Programming Logic 101)',
    issuer: 'Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/GRX530MVVZ0M'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Dasar Git dengan GitHub',
    issuer: 'Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/53XEDM9V0PRN'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Dasar Visualisasi Data',
    issuer: 'Google Developer | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/JMZVEL8Y3PN9'
  },
  {
    img: '/packages/images/dicoding.png',
    name: 'Pemrograman dengan Python',
    issuer: 'Google Developer | Dicoding',
    date: '2025',
    category: 'course',
    link: 'https://www.dicoding.com/certificates/1OP827MG8PQK'
  },
  {
    img: '/packages/images/IDN.png',
    name: 'Belajar Linux dari Nol',
    issuer: 'ID Networkers',
    date: '2024',
    category: 'course',
    link: 'https://lms.idn.id/cert-verification/?certificate_id=IDN-1718857157-11033-37269'
  },
  {
    img: '/packages/images/IDN.png',
    name: 'Cisco Dasar',
    issuer: 'ID Networkers',
    date: '2024',
    category: 'course',
    link: 'https://lms.idn.id/cert-verification/?certificate_id=IDN-1718983104-184-37269'
  },
  {
    img: '/packages/images/IDN.png',
    name: 'Mikrotik Dasar',
    issuer: 'ID Networkers',
    date: '2024',
    category: 'course',
    link: 'https://lms.idn.id/cert-verification/?certificate_id=IDN-1720152554-182-37269'
  },
  // Tambahkan 16 data sertifikat lainnya di sini, pastikan mengisi 'category' nya
];

const Certificates = () => {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [columns, setColumns] = useState(4);

  // Logika Responsif untuk mengatur jumlah item agar grid selalu maksimal 2 baris
  useEffect(() => {
    const handleResize = () => {
      // Breakpoint diperlebar agar semua ukuran layar HP masuk ke mode 2 kolom
      if (window.innerWidth < 768) {
        setItemsPerPage(4); // HP: 2 kolom x 2 baris = 4 item
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6); // Tablet: 3 kolom x 2 baris = 6 item
        setColumns(3);
      } else {
        setItemsPerPage(8); // Desktop: 4 kolom x 2 baris = 8 item
        setColumns(4);
      }
    };

    handleResize(); // Inisialisasi awal saat render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logika untuk menyaring sertifikat berdasarkan state filter
  const filteredCertificates = certificatesData.filter(cert => {
    if (filter === 'all') return true;
    return cert.category === filter;
  });

  // Logika Pagination (Menghitung total halaman & memotong data)
  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

  // Mencegah error halaman kosong jika pengguna membesarkan layar/resize dari HP ke Desktop
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentCertificates = filteredCertificates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Kembali ke halaman 1 setiap ganti kategori filter
  };

  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My completed certifications</span>

      {/* TOMBOL FILTER */}
      <div className="qualification__tabs" style={{ justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
        <div className={`qualification__button button--flex ${filter === 'all' ? 'qualification__active' : ''}`} onClick={() => handleFilterChange('all')} style={{ cursor: 'pointer' }}>
          All
        </div>
        <div className={`qualification__button button--flex ${filter === 'official' ? 'qualification__active' : ''}`} onClick={() => handleFilterChange('official')} style={{ cursor: 'pointer' }}>
          Official
        </div>
        <div className={`qualification__button button--flex ${filter === 'course' ? 'qualification__active' : ''}`} onClick={() => handleFilterChange('course')} style={{ cursor: 'pointer' }}>
          Courses
        </div>
      </div>

      {/* KONTEN SERTIFIKAT & PANAH PAGINATION */}
      <div className="container" style={{ position: 'relative' }}>
        {/* Panah Kiri */}
        <i 
          className="uil uil-angle-left-b" 
          style={{ 
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            fontSize: columns === 2 ? '1.8rem' : '2.5rem', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.3 : 1 
          }}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        ></i>

        {/* Grid Sertifikat (Meminjam class projects__container dan diubah ke maksimal 4 kolom) */}
        <div 
          className="projects__container grid" 
          style={{ 
            gridTemplateColumns: `repeat(${columns}, 1fr)`, 
            gap: columns === 2 ? '0.5rem' : '1.5rem', 
            padding: columns === 2 ? '1rem 2rem' : '1rem 3.5rem' 
          }}
        >
          {currentCertificates.map((cert, index) => (
          <a 
            href={cert.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            key={index} 
            className="projects__content" 
            style={{ 
              padding: columns === 2 ? '0.5rem' : '1rem', 
              minWidth: 0, 
              overflowWrap: 'break-word',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              backgroundColor: 'var(--container-color)',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
              <img 
                src={cert.img} 
                alt={cert.name} 
                className="projects__img" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  aspectRatio: '4/3', 
                  objectFit: 'cover', 
                marginBottom: columns === 2 ? '0.5rem' : '1rem',
                borderRadius: '0.75rem'
                }} 
              />
            <h3 className="projects__name" style={{ fontSize: '14px', marginBottom: '0.25rem', color: 'var(--title-color)' }}>{cert.name}</h3>
            <p className="projects__description" style={{ fontSize: '12px', color: 'var(--text-color)' }}>{cert.issuer} - {cert.date}</p>
          </a>
          ))}
        </div>

        {/* Panah Kanan */}
        <i 
          className="uil uil-angle-right-b" 
          style={{ 
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
            fontSize: columns === 2 ? '1.8rem' : '2.5rem', cursor: currentPage === totalPages || totalPages === 0 ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages || totalPages === 0 ? 0.3 : 1 
          }}
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        ></i>
      </div>

      {/* Indikator Titik (Dots Pagination) */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', alignItems: 'center', marginTop: '1.5rem' }}>
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
      )}
    </section>
  );
};

export default Certificates;