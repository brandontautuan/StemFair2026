import { useState } from 'react';
import './Sponsors.css';

const SPONSORSHIP_FORM_URL = '#'; // Placeholder—add when available
const CONTACT_EMAIL = 'abaanmajid15@gmail.com';

const tiers = [
  {
    name: 'Gold',
    colorClass: 'gold',
    featured: false,
    benefits: [
      { text: 'Keynote speaker slot', highlight: true },
      { text: 'Premium branding on event communication', highlight: true },
      { text: 'Premium table location in demo session', highlight: false },
    ],
  },
  {
    name: 'Silver',
    colorClass: 'silver',
    featured: false,
    benefits: [
      { text: 'Premium branding on event communication', highlight: false },
      { text: 'Premium table location in demo session', highlight: false },
    ],
  },
  {
    name: 'Bronze',
    colorClass: 'bronze',
    featured: false,
    benefits: [
      { text: 'Standard branding on event communication', highlight: false },
      { text: 'Table location in demo session', highlight: false },
    ],
  },
];

const whySponsor = [
  {
    title: 'Visibility',
    desc: 'Showcase your brand to students, faculty, and industry peers.',
  },
  {
    title: 'Talent Pipeline',
    desc: 'Connect with motivated STEM students ready to make an impact.',
  },
  {
    title: 'Community Impact',
    desc: 'Fuel hands-on STEM education and student innovation.',
  },
];

function Sponsors() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="main-content sponsors-page">
      {/* Hero intro */}
      <section className="sponsors-hero">
        <h1 className="page-title">
          Sponsor the Los Rios STEM Fair
        </h1>
        <p className="sponsors-hero-subtitle">
          Partner with us to fuel student innovation. Your sponsorship directly supports
          project showcases, keynote talks, and hands-on STEM experiences for hundreds of
          community college students.
        </p>
      </section>

      {/* Why Sponsor */}
      <section className="sponsors-why">
        <h2 className="sponsors-section-title">
          Why Sponsor?
        </h2>
        <div className="sponsors-why-grid">
          {whySponsor.map((item) => (
            <div className="sponsors-why-card" key={item.title}>
              <h3 className="sponsors-why-card-title">{item.title}</h3>
              <p className="sponsors-why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="sponsors-tiers">
        <h2 className="sponsors-section-title">
          Sponsorship Levels
        </h2>
        <p className="sponsors-tiers-intro">
          Choose the level that fits your organization. Every tier makes a meaningful difference.
        </p>

        <div className="sponsors-tiers-grid">
          {tiers.map((tier) => (
            <div
              className={`sponsors-tier-card sponsors-tier-card--${tier.colorClass}${tier.featured ? ' sponsors-tier-card--featured' : ''}`}
              key={tier.name}
            >
              {tier.featured && <span className="sponsors-tier-badge">Most Popular</span>}
              <h3 className={`sponsors-tier-name sponsors-tier-name--${tier.colorClass}`}>
                {tier.name}
              </h3>
              <ul className="sponsors-tier-benefits">
                {tier.benefits.map((b) => (
                  <li key={b.text} className={b.highlight ? 'benefit-highlight' : ''}>
                    {b.text}
                  </li>
                ))}
              </ul>
              <div className="sponsors-tier-cta-wrap">
                {SPONSORSHIP_FORM_URL !== '#' ? (
                  <a
                    href={SPONSORSHIP_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sponsors-tier-btn sponsors-tier-btn--${tier.colorClass}`}
                  >
                    Become a {tier.name} Sponsor
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`sponsors-tier-btn sponsors-tier-btn--${tier.colorClass}`}
                    onClick={() => setShowContact(true)}
                  >
                    Get in Touch
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {showContact && (
        <div className="sponsors-modal-overlay" onClick={() => setShowContact(false)}>
          <div className="sponsors-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="sponsors-modal-close"
              onClick={() => setShowContact(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="sponsors-modal-title">Get in Touch</h2>
            <p className="sponsors-modal-text">
              Interested in sponsoring the Los Rios STEM Fair? Reach out to us at:
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="sponsors-modal-email">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default Sponsors;
