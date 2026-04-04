import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroPhotoBackground from '../components/HeroPhotoBackground';
import './EventFlow.css';
import './FAQ.css';
import './Home.css';

interface Speaker {
  name: string;
  title: string;
  photo: string;
  bio?: string;
}

const speakers: Speaker[] = [
  {
    name: 'Ramkarthik Ganesan',
    title: 'Fellow at Micron Technology',
    photo: '/speakers/ramkarthik_micron.jpeg',
  },
  {
    name: 'Tahmid Rahman',
    title: 'Director Product Marketing, Solidigm Corp',
    photo: '/speakers/tahmid_solidigm.png',
    bio: 'Tahmid Rahman is a Director of Product Marketing specializing in data center solutions. He drives product positioning, messaging, and business impact across enterprise and cloud markets, partnering closely with product and sales teams to accelerate growth. Tahmid is a Folsom resident and moved to the area with his first job at Intel Corporation as a mixed signal designer, he enjoys the various outdoor activities Folsom and adjacent areas offer.',
  },
  {
    name: 'Marcie Kahbody',
    title: 'CIO at Caltrans',
    photo: '/speakers/marcie_caltrans.jpeg',
  },
  {
    name: 'Tim Jones',
    title: 'Sr. Solutions Architect at AWS',
    photo: '/speakers/tim_aws.png',
    bio: 'Tim Jones is a Sr Solutions Architect with Amazon Web Services (AWS). He works with Higher Education, State, and Local Government customers in California helping them understand and adopt AWS services. Before his current role, he spent 16 years as a developer and technical lead running mission critical systems at Hewlett Packard.',
  },
  {
    name: 'Shashank Bangalore Lakshman',
    title: 'Engineering Leader \u2013 MLOps, Renesas Electronics',
    photo: '/speakers/shashank_renesas.jpeg',
  },
];

const faqs = [
  {
    question: 'Who can submit a project?',
    answer:
      'Any student currently enrolled in a college within the Los Rios Community College District can submit a project. Whether you attend American River College, Cosumnes River College, Folsom Lake College, or Sacramento City College, you are welcome to submit!',
  },
  {
    question: 'Is there a team size limit?',
    answer:
      'No—there is no team size cap. You can participate solo or with a group of any size. That said, larger teams often find it harder to coordinate and to keep everyone actively involved, so it helps to plan how you\'ll work together.',
  },
  {
    question: 'Is prior experience required?',
    answer:
      'No prior experience is required! The STEM Fair is designed to be inclusive for participants of all skill levels. Come with curiosity and a willingness to learn.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}>
          <dt
            className="faq-question"
            role="button"
            tabIndex={0}
            onClick={() => toggle(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(index); } }}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-chevron" aria-hidden="true" />
          </dt>
          <dd className="faq-answer">
            <div className="faq-answer-inner">{faq.answer}</div>
          </dd>
        </div>
      ))}
    </dl>
  );
}

const HOME_PAGE_CLASS = 'home-page';

function SpeakerBioModal({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="speaker-modal-overlay" onClick={onClose}>
      <div className="speaker-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Bio for ${speaker.name}`}>
        <button className="speaker-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="speaker-modal-header">
          <div className="speaker-modal-photo">
            <img src={speaker.photo} alt={speaker.name} />
          </div>
          <div className="speaker-modal-info">
            <h3 className="speaker-modal-name">{speaker.name}</h3>
            <p className="speaker-modal-title">{speaker.title}</p>
          </div>
        </div>
        <p className="speaker-modal-bio">{speaker.bio}</p>
      </div>
    </div>
  );
}

function Home() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    document.documentElement.classList.add(HOME_PAGE_CLASS);
    return () => document.documentElement.classList.remove(HOME_PAGE_CLASS);
  }, []);

  return (
    <>
      <div className="banner-container home-hero">
        <div className="home-hero-inner">
          <HeroPhotoBackground />
          <div className="banner-text">
            <h1 className="banner-title">Los Rios STEM Fair</h1>
            <p className="banner-tagline">Learn by Doing</p>
            <p className="banner-subtitle">April 17th • Folsom Lake College</p>
            <div className="banner-actions" role="group" aria-label="Register for the event">
              <Link to="/register" className="banner-btn banner-btn-primary">
                Register to Attend Event
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content home-content">
        <section className="speakers-section">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="participate-intro">
            Hear from industry leaders who are shaping the future of technology and STEM.
          </p>
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div className="speaker-card" key={speaker.name}>
                <div
                  className={`speaker-image${speaker.bio ? ' speaker-image--clickable' : ''}`}
                  role={speaker.bio ? 'button' : undefined}
                  tabIndex={speaker.bio ? 0 : undefined}
                  aria-label={speaker.bio ? `View bio for ${speaker.name}` : undefined}
                  onClick={speaker.bio ? () => setActiveSpeaker(speaker) : undefined}
                  onKeyDown={speaker.bio ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveSpeaker(speaker); } } : undefined}
                >
                  <img src={speaker.photo} alt={speaker.name} />
                  {speaker.bio && <span className="speaker-bio-hint">View Bio</span>}
                </div>
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="event-intro event-intro-compact">
          <h2 className="section-title">
            What is the Los Rios STEM Fair
          </h2>
          <div className="intro-content">
            <p className="intro-text">
              The Los Rios STEM Fair is where &quot;learning by doing&quot; meets professional opportunity. We are providing a platform for community college students to bridge the gap between academic theory and the industry, allowing you to showcase your technical skills directly to professionals and the Los Rios Community. Whether you want to start a solo endeavor or a large-scale group project, this is your stage to present your work to those who move the industry forward.
            </p>
          </div>
        </section>

        <section className="event-intro event-intro-compact">
          <div className="key-dates-schedule-inline">
            <h3 className="section-title key-dates-schedule-heading">Event Schedule</h3>
            <p className="key-dates-schedule-intro">
              April 17th at Folsom Lake College.
            </p>
            <ul className="schedule-list" aria-label="Event schedule">
              <li className="schedule-item">
                <span className="schedule-time">9:00 – 10:00 AM</span>
                <span className="schedule-location">Falcon's Roost</span>
                <span className="schedule-title">Coffee &amp; Welcome Address</span>
                <p className="schedule-desc">
                  Welcome address by Folsom Lake College Administration.
                </p>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/ramkarthik_micron.jpeg" alt="Ramkarthik Ganesan" />
                <div className="schedule-item-content">
                  <span className="schedule-time">10:00 – 10:30 AM</span>
                  <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                  <span className="schedule-title">&ldquo;From Data to Intelligence&rdquo;</span>
                  <p className="schedule-desc">
                    Keynote by <strong>Ramkarthik Ganesan</strong>, Fellow at Micron Technology.
                  </p>
                </div>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/tahmid_solidigm.png" alt="Tahmid Rahman" />
                <div className="schedule-item-content">
                  <span className="schedule-time">10:45 – 11:15 AM</span>
                  <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                  <span className="schedule-title">&ldquo;Solidigm: Storage for AI innovation&rdquo;</span>
                  <p className="schedule-desc">
                    Keynote by <strong>Tahmid Rahman</strong>, Director Product Marketing, Solidigm Corp.
                  </p>
                </div>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/marcie_caltrans.jpeg" alt="Marcie Kahbody" />
                <div className="schedule-item-content">
                  <span className="schedule-time">11:30 AM – 12:00 PM</span>
                  <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                  <span className="schedule-title">&ldquo;Building Traffic Planning &amp; Management Systems using Innovative AI Technologies&rdquo;</span>
                  <p className="schedule-desc">
                    Keynote by <strong>Marcie Kahbody</strong>, CIO at Caltrans.
                  </p>
                </div>
              </li>
              <li className="schedule-item">
                <span className="schedule-time">12:00 – 2:00 PM</span>
                <span className="schedule-location">Falcon's Roost</span>
                <span className="schedule-title">Student Demo Showcasing</span>
                <p className="schedule-desc">
                  Browse student project demos, interact with teams, and see their work in action.
                </p>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/tim_aws.png" alt="Tim Jones" />
                <div className="schedule-item-content">
                  <span className="schedule-time">2:00 – 2:30 PM</span>
                  <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                  <span className="schedule-title">&ldquo;Why Computer Science is Essential in the Age of Generative AI&rdquo;</span>
                  <p className="schedule-desc">
                    Keynote by <strong>Tim Jones</strong>, Sr. Solutions Architect at AWS.
                  </p>
                </div>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/shashank_renesas.jpeg" alt="Shashank Bangalore Lakshman" />
                <div className="schedule-item-content">
                  <span className="schedule-time">2:45 – 3:15 PM</span>
                  <span className="schedule-location">Peregrine Room, Falcon's Roost</span>
                  <span className="schedule-title">&ldquo;STEM Professional 2.0: Thriving on the Razor Edge of AI&rdquo;</span>
                  <p className="schedule-desc">
                    Keynote by <strong>Shashank Bangalore Lakshman</strong>, Engineering Leader – MLOps, Renesas Electronics.
                  </p>
                </div>
              </li>
              <li className="schedule-item schedule-item--keynote">
                <img className="schedule-speaker-photo" src="/speakers/dean_lorena.jpeg" alt="Dr. Lorena Navarro" />
                <div className="schedule-item-content">
                  <span className="schedule-time">3:30 – 4:00 PM</span>
                  <span className="schedule-location">Falcon's Roost</span>
                  <span className="schedule-title">Closing Ceremony</span>
                  <p className="schedule-desc">
                    Certificates of Achievement, by Dean of STEM <strong>Dr. Lorena Navarro</strong>.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-intro">
            Have questions about the Los Rios STEM Fair? Find answers below. For additional help,
            email us at stemfairlosrios@gmail.com or ping an admin on Discord.
          </p>
          <FAQAccordion />
        </section>
      </main>

      {activeSpeaker && (
        <SpeakerBioModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
      )}
    </>
  );
}

export default Home;
