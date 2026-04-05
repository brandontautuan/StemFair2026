import { motion } from 'framer-motion';
import './GettingThere.css';

const FLC_ADDRESS = '10 College Parkway, Folsom, CA 95630';
const FALCONS_ROOST_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Falcon's+Roost,+Folsom+Lake+College,+Folsom,+CA";
const FLC_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Folsom+Lake+College,+10+College+Pkwy,+Folsom,+CA+95630';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const viewport = { once: false, amount: 0.12 };

function GettingThere() {
  return (
    <main className="main-content">
      <motion.section
        className="getting-there-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title getting-there-title" variants={itemVariants}>
          Getting There
        </motion.h1>
        <motion.p className="getting-there-intro" variants={itemVariants}>
          The STEM Fair takes place at the <strong>Falcon&apos;s Roost</strong> at Folsom Lake
          College. Here&apos;s everything you need to find us and park on campus.
        </motion.p>

        <motion.div className="getting-there-address" variants={itemVariants}>
          <span className="getting-there-address-icon" aria-hidden="true">&#x1F4CD;</span>
          <div>
            <strong>Folsom Lake College</strong>
            <br />
            {FLC_ADDRESS}
          </div>
        </motion.div>

        {/* Google Maps Directions */}
        <motion.div className="getting-there-cards" variants={containerVariants}>
          <motion.div className="getting-there-card" variants={itemVariants}>
            <h2 className="getting-there-card-title">Directions to Campus</h2>
            <p className="getting-there-card-text">
              Folsom Lake College is located just off Highway 50 at the East Bidwell Street exit in
              Folsom. The campus is accessible via East Bidwell Street and College Parkway.
            </p>
            <a
              href={FLC_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="getting-there-btn"
            >
              Get Directions to FLC &rarr;
            </a>
          </motion.div>

          <motion.div className="getting-there-card" variants={itemVariants}>
            <h2 className="getting-there-card-title">Directions to Falcon&apos;s Roost</h2>
            <p className="getting-there-card-text">
              The Falcon&apos;s Roost is the student center building on campus where all STEM Fair
              events, keynotes, and demos take place. It houses the Peregrine Room, cafeteria, and
              bookstore.
            </p>
            <a
              href={FALCONS_ROOST_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="getting-there-btn"
            >
              Get Directions to Falcon&apos;s Roost &rarr;
            </a>
          </motion.div>
        </motion.div>

        {/* Parking */}
        <motion.div className="getting-there-parking" variants={itemVariants}>
          <h2 className="getting-there-section-heading">Parking</h2>
          <div className="getting-there-parking-card">
            <span className="getting-there-parking-icon" aria-hidden="true">&#x1F17F;&#xFE0F;</span>
            <div className="getting-there-parking-info">
              <p>
                Parking is available in designated lots (A, B, C, and D). A{' '}
                <strong>$2 daily parking permit</strong> is required and can be purchased at the
                kiosks located near the entrances of each parking lot.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Campus Map PDF */}
        <motion.div className="getting-there-campus-map" variants={itemVariants}>
          <h2 className="getting-there-section-heading">Campus Map</h2>
          <p className="getting-there-map-note">
            Use the campus map below to locate the Falcon&apos;s Roost (building <strong>FR</strong>),
            parking lots, and kiosks. You can also{' '}
            <a href="/flc-map.pdf" target="_blank" rel="noopener noreferrer">
              download the full PDF
            </a>.
          </p>
          <div className="getting-there-pdf-wrap">
            <iframe
              title="FLC Campus Map"
              src="/flc-map.pdf"
              className="getting-there-pdf"
            />
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default GettingThere;
