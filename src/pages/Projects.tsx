import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  team: string;
  field: string;
  description: string;
  longDescription: string;
  status: 'open' | 'closed';
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Smart Irrigation System',
    team: 'Green Tech Squad',
    field: 'Engineering',
    description: 'An IoT-based irrigation system that uses soil moisture sensors to optimize water usage for sustainable agriculture.',
    longDescription: 'Our Smart Irrigation System addresses the growing need for sustainable agriculture by leveraging IoT technology. We use soil moisture sensors placed at multiple depths to monitor real-time conditions and deliver water precisely when and where crops need it. The system integrates with a mobile app that allows farmers to monitor their fields remotely, set thresholds, and receive alerts. We conducted field trials over two growing seasons and demonstrated a 35% reduction in water usage while maintaining crop yield. The project combines hardware design, embedded systems programming, and data analysis—offering a practical solution for water-scarce regions.',
    status: 'open',
  },
  {
    id: 2,
    title: 'Machine Learning for Disease Prediction',
    team: 'Data Medics',
    field: 'Computer Science',
    description: 'A predictive model that analyzes medical data to identify early signs of disease, with a focus on accessibility in underserved communities.',
    longDescription: 'Data Medics is building an accessible machine learning platform for early disease prediction. Our model analyzes anonymized patient data—including lab results, vital signs, and family history—to flag individuals who may benefit from early screening. A key focus is making the tool usable in low-resource settings: we designed a lightweight version that runs on older hardware and provides results in multiple languages. We partnered with a local health clinic to validate our approach and are working toward an ethical framework for deployment. The project touches on data science, healthcare ethics, and human-centered design.',
    status: 'closed',
  },
  {
    id: 3,
    title: 'Renewable Energy Microgrid',
    team: 'Power Pioneers',
    field: 'Physics / Engineering',
    description: 'Design and simulation of a small-scale microgrid integrating solar and battery storage for local energy resilience.',
    longDescription: 'The Renewable Energy Microgrid project explores how communities can become more energy-resilient using solar and battery storage. We built a physical scale model and a software simulation to test different configurations under varying load and weather conditions. Our findings show that a hybrid system with 60% solar and 40% battery capacity can provide reliable backup power for critical loads during grid outages. We presented our design at a regional sustainability conference and are now working with campus facilities to pilot a small installation. The project spans electrical engineering, simulation modeling, and policy considerations for renewable adoption.',
    status: 'open',
  },
  {
    id: 4,
    title: 'Biodegradable Polymer Research',
    team: 'Chem Innovators',
    field: 'Chemistry',
    description: 'Developing biodegradable plastics from plant-based materials to reduce environmental impact of single-use products.',
    longDescription: 'Chem Innovators is developing biodegradable plastics from plant-based polymers, including corn starch and cellulose derivatives. Our goal is to create materials that perform like conventional plastics but break down naturally within months under composting conditions. We have tested several formulations for tensile strength, water resistance, and decomposition rates. The most promising blend meets the strength requirements for food packaging while degrading 90% within 120 days in industrial compost. We are now exploring scalability and cost reduction. This project involves organic chemistry, materials testing, and environmental impact assessment.',
    status: 'closed',
  },
  {
    id: 5,
    title: 'Aquatic Ecosystem Restoration',
    team: 'Eco Warriors',
    field: 'Biology',
    description: 'Study of wetland restoration techniques and their effectiveness in supporting native species and water quality.',
    longDescription: 'Eco Warriors is studying wetland restoration techniques in local watersheds. We compare sites that have undergone different restoration interventions—native plant reintroduction, water flow restoration, and invasive species removal—and measure outcomes for water quality, biodiversity, and carbon sequestration. Over two years, we collected data on macroinvertebrates, plant cover, and water chemistry. Our preliminary results suggest that a combined approach yields the best outcomes, with native plant cover increasing by 40% and nitrate levels dropping significantly. We work closely with a regional conservancy and hope our findings will inform future restoration projects.',
    status: 'open',
  },
  {
    id: 6,
    title: 'Accessible STEM Education Platform',
    team: 'Inclusive Code',
    field: 'Computer Science',
    description: 'A web platform that makes STEM learning resources available in multiple languages and formats for diverse learners.',
    longDescription: 'Inclusive Code is building a web platform that makes STEM learning resources accessible to diverse learners. The platform offers content in multiple languages, supports screen readers and keyboard navigation, and provides alternative formats (text, audio, video). We conducted usability testing with students who have visual impairments, dyslexia, and English as a second language to ensure our design meets real needs. The platform includes interactive modules for physics, math, and coding—all built with accessibility standards in mind. We plan to launch a pilot with three local schools this fall and iterate based on educator feedback.',
    status: 'open',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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

  return (
    <main className="main-content projects-page">
      <motion.section
        className="projects-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h1 className="page-title projects-title" variants={itemVariants}>
          Projects
        </motion.h1>
        <motion.p className="projects-intro" variants={itemVariants}>
          Explore the innovative projects from students participating in the Los Rios STEM Fair. 
          These projects span science, technology, engineering, and mathematics—showcasing the 
          creativity and dedication of our community.
        </motion.p>

        <motion.div className="projects-grid" variants={containerVariants}>
          {mockProjects.map((project) => (
            <motion.article key={project.id} className="project-card" variants={itemVariants}>
              <span className="project-field">{project.field}</span>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-team">{project.team}</p>
              <p className="project-description">{project.description}</p>
              <button
                type="button"
                className="project-read-more"
                onClick={() => setSelectedProject(project)}
              >
                Read More
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <span
                className={`project-modal-badge project-modal-badge--${selectedProject.status}`}
              >
                {selectedProject.status === 'open'
                  ? 'Open for New Members'
                  : 'Closed for New Members'}
              </span>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
            <div className="project-modal-body">
              <h2 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h2>
              <p className="project-modal-team">{selectedProject.team} · {selectedProject.field}</p>
              <div className="project-modal-description">
                {selectedProject.longDescription}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
