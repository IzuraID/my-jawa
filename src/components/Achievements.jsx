import React from 'react';

const achievementsData = [
  {
    icon: 'uil-trophy',
    title: 'Runner Up LKS ITNSA DIY 2024',
    description: 'Given by the Youth and Sports Department at the annual vocational high school event.'
  },
  {
    icon: 'uil-user',
    title: 'Participant Baparekraf Developer Day(BDD) 2024',
    description: 'New knowledge with offline event BDD 2024 as a participant'
  },
  {
    icon: 'uil-user',
    title: 'Participant in the MikroTik Network Olympiad 2024',
    description: 'Become a participant in the Mikrotik Network Olympiad organized by Citraweb.'
  },
  {
    icon: 'uil-medal',
    title: 'Finalist LKS Cyber Security DIY 2023',
    description: 'Failure in competition and lack of preparation.'
  }
];

const Achievements = () => {
  return (
    <section className="achievements section">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle">My accomplishments</span>

      <div className="container" style={{ padding: '0 0.5rem' }}>
        <ul className="achievements__list grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {achievementsData.map((item, index) => (
            <li className="achievements__item" key={index}>
              <i className={`uil ${item.icon} achievements__icon`}></i>
              <div>
                <h3 className="achievements__title">{item.title}</h3>
                <p className="achievements__description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;