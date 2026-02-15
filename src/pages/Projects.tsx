import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  lead: string;
  email: string;
  field: string;
  description: string;
  longDescription: string;
  skills: string;
  status: 'open' | 'closed';
  showcaseFormat?: string;
}

type ModalSection = 'details' | 'join';

const projects: Project[] = [
  {
    id: 1,
    title: 'Health and Dissolved Oxygen Levels of Wetlands',
    lead: 'Nikolas Linn',
    email: 'nick042205@gmail.com',
    field: 'Chemistry / Biology',
    description: 'Monitoring dissolved oxygen levels, pH, and turbidity of FLC\u2019s wetland using quantitative and qualitative methods to analyze water health.',
    longDescription: 'Students will monitor dissolved oxygen levels, pH, and turbidity of FLC\u2019s wetland. Various quantitative and qualitative methods will be used to analyze water health from multiple standpoints (drinking water standards and capacity to support wildlife). The project compares water from the marsh behind the FLC campus to standard water quality metrics including temperature, dissolved oxygen, conductivity, pH, and turbidity, researching ways to improve the marsh water towards a drinkable state.',
    skills: 'Chemistry lab skills, understanding of chemistry topics, research skills, and teamwork. The process of researching and executing accessible procedures are crucial.',
    status: 'open',
    showcaseFormat: 'Both: Table display and a scheduled presentation',
  },
  {
    id: 2,
    title: 'FLC STEM Club Solar Regatta',
    lead: 'Jack Brooks',
    email: 'w2031507@apps.losrios.edu',
    field: 'Engineering',
    description: 'The FLC STEM Club\u2019s second-year entry into the SMUD Solar Regatta\u2014a competition where students design, build, and race solar-powered boats.',
    longDescription: 'The FLC STEM Club entry into the SMUD Solar Regatta. "Working together in teams, students design, build and race their own solar-powered boats. They are judged for speed, distance, maneuverability and more. Students get hands-on, out-of-the-classroom experience with renewable energy and engineering." \u2014 SMUD Website. This will be the second year that Folsom Lake College participates in the Regatta. The team will be presenting the boat itself and what it took to build it, along with the challenges faced.',
    skills: 'An open mind to learning and working with your hands, research ability, and a safety-conscious mindset.',
    status: 'open',
  },
  {
    id: 3,
    title: 'Wetland Ecosystem & Mycoremediation Research',
    lead: 'Jacob Ward',
    email: 'wardj@flc.losrios.edu',
    field: 'Biology / Chemistry',
    description: 'Research conducted at FLC and UC Davis on the protected wetland ecosystem at Folsom Lake College, integrating water quality analysis, biomonitoring, and mycoremediation.',
    longDescription: 'Folsom Lake College (FLC) is home to a protected wetland ecosystem that is part of the historic Natoma Ditch. This area along the North East side of the campus property was set aside as part of an environmental mitigation plan during an expansion project at the FLC\u2013El Dorado Center in Placerville. The wetland area has cultural significance for the local Nisenan Maidu and Miwok communities.\n\nThe aim of this project and future research is to integrate the wetland as a key component of authentic learning experiences. Analyzing water quality and collecting data for biomonitoring helped to inform mycoremediation research at Folsom Lake College. The long-term research interest is to determine what role native species of fungi play in the degradation of environmental contaminants such as phthalates found in mass-manufactured products. Employing new and innovative technologies like nanopore sequencing has allowed a deeper level of inquiry for research internships.',
    skills: 'DNA sequencing, organic chemistry, and analytical chemistry.',
    status: 'closed',
  },
  {
    id: 4,
    title: 'Dying Light C++ Mod Loader',
    lead: 'Brendon Bone',
    email: 'w2016166@apps.losrios.edu',
    field: 'Computer Science',
    description: 'A mod loader for Dying Light (2015) that replaces the original executable with a custom one, enabling loading of custom resource packs, material packs, and DLLs.',
    longDescription: 'This project is a mod loader for the game Dying Light (2015). The goal is to load mods such as custom resource packs (models/textures), custom material packs (shaders/material data) and DLLs (libraries that contain additional code).\n\nThe project works by replacing the original game executable with a custom executable. This is possible because of the way the game was programmed\u2014instead of having one program that contains the entire game, it is split into multiple parts (the engine, game, filesystem, renderer, and DyingLightGame.exe). The game executable is relatively simple, calling only a few needed functions from the engine and filesystem in order to start the game and load assets. Once re-implemented, the custom executable can load extra data the original game would not have intended.\n\nBy treating the engine like an API, a structured, reliable pathway for customization is created without rewriting the engine itself.',
    skills: 'C++ experience, reverse engineering through programs like IDA and Ghidra, and understanding of how functions are exported and imported across libraries.',
    status: 'open',
    showcaseFormat: 'Present: Speaking in front of an audience/panel',
  },
  {
    id: 5,
    title: 'Macrocyclic Peptide Chemistry Research',
    lead: 'Emma Lawler',
    email: 'LawlerE@flc.losrios.edu',
    field: 'Chemistry',
    description: 'A presentation on research from the UC Berkeley C-GEM Summer Research Program, focusing on macrocyclic peptide chemistry and rational drug design.',
    longDescription: 'A talk based on research conducted during the UC Berkeley C-GEM Summer Research Program in the field of chemical biology with a focus on peptide chemistry.\n\nMacrocyclic peptides are highly valuable as a drug modality due to their size and rigidity, providing these scaffolds the ability to target "undruggable targets". Recent work from the Schepartz lab has demonstrated a novel way to additionally rigidify macrocyclic peptide conformations via a modified Friedl\u00e4nder reaction that installs a heterocyclic quinoline motif directly in the peptide backbone, producing a high rotational barrier around the adjacent chiral aryl-amide atropisomeric axis.\n\nThis work aims to elucidate the design rules for such peptides in three aspects: identifying the relationship between ring size and rotational barrier, elucidating the impact of peptide sequence on product distribution, and improving the solid-phase synthesis of these macrocycles by adapting new synthetic strategies. Expanding these design rules should lay the groundwork for the rational design of libraries of atropisomeric macrocycles to screen for peptides able to target "undruggable targets".',
    skills: 'Knowledge of peptide chemistry and chemical biology. A room with a projector is needed for the presentation.',
    status: 'closed',
  },
  {
    id: 6,
    title: 'Interactive Math Learning Game',
    lead: 'Almar Abu Alkhair',
    email: 'almarabualkhair@gmail.com',
    field: 'Mathematics / Computer Science',
    description: 'An interactive web-based game that helps math students by leading them through mini-challenges where they solve problems step-by-step in a fun, guided way.',
    longDescription: 'The idea is an interactive web-based game that helps math students. Each math problem leads them into a mini-challenge or small game, where they solve it step-by-step in a fun way, and by the end, they arrive at the solution through guided, playful interaction.',
    skills: 'Basic math knowledge, beginner web development skills, and simple tools like HTML, CSS, and JavaScript, along with access to a computer and internet.',
    status: 'open',
  },
  {
    id: 7,
    title: 'MuseOn \u2014 Social Event App',
    lead: 'Denis Polyakov',
    email: 'W2073713@apps.losrios.edu',
    field: 'Computer Science / Physics',
    description: 'A social event app that helps students, athletes, and artists host semi-spontaneous events unified by music, with smart playlist algorithms and community safety features.',
    longDescription: 'A social event app called MuseOn assists students, athletes, and artists in forming and hosting semi-spontaneous events in their community. The app\u2019s central theme is music and its ability to unite; hosts create a plan (study group, pickup sports, art exposition), set a location, and a playlist, then publish their post on the app, which notifies members within a set radius. Passersby can also join by scanning a QR code or receiving a Bluetooth invitation.\n\nUpon joining the "bubble," members can link their music preferences through the app, which uses an algorithm based on the surrounding environment, set goals, and member preferences to pick the next song. Hosts are responsible for maintaining order at events and are assisted by the app. Anyone walking by who deems the music too loud or notices other unruly behaviors can report it through the same QR/Bluetooth system. Hosts then receive a Mu score based on these inputs and can credit participants for positive contributions, creating a system that reinforces positive behavior.\n\nUltimately, connections are formed between interest groups that otherwise would have never interacted, and members are incentivized to spend more time outside their comfort zone while maintaining peace and safety.',
    skills: 'Physics of sound waves, programming, machine/statistical learning, and event hosting.',
    status: 'open',
  },
  {
    id: 8,
    title: 'Live Game Theory Simulation',
    lead: 'Jolie Carroll',
    email: 'jelicarroll@gmail.com',
    field: 'Economics',
    description: 'An interactive economics project using a crowd of students as real-time participants to recreate experiments like the Prisoner\u2019s Dilemma, Public Goods, and Ultimatum Game.',
    longDescription: 'Using a crowd of students as real-time participants, this project recreates simple experiments modeling economic behavior, such as the Prisoner\u2019s Dilemma, Public Goods, and Ultimatum Game. The team uses either Google Sheets or a Streamlit app to keep track of participants\u2019 choices and then displays the aggregate data anonymously for students to view.\n\nStudents will walk away from the booth with an understanding of basic behavioral economics: Why do agents make the choices they do? Which choice is the best strategy? What happens when participants free ride?',
    skills: 'Python and Excel/Google Sheets knowledge (desirable but not required\u2014the team can learn along the way). An interest in economics is important.',
    status: 'open',
  },
  {
    id: 9,
    title: 'AI Ping Pong Scorer',
    lead: 'Tarek Sakakini',
    email: 'sakakit@flc.losrios.edu',
    field: 'Computer Science / AI',
    description: 'An AI-based phone app that uses computer vision to automatically score ping pong matches, identifying the winner of each point in real time.',
    longDescription: 'In this project, the team builds an AI-based phone app that automatically scores ping pong matches. The app uses the phone\u2019s camera and computer vision techniques to identify the winner of each point and maintain score. To speed up development, AI coding tools are also used to develop the app.',
    skills: 'Basic understanding of software development and AI.',
    status: 'open',
  },
  {
    id: 10,
    title: 'CISC 310 \u2014 Vibe-Coded Mobile Apps',
    lead: 'Tarek Sakakini',
    email: 'sakakit@flc.losrios.edu',
    field: 'Computer Science',
    description: 'Students in CISC 310 use Cursor IDE and AI-assisted coding to develop full mobile apps\u2014iOS, Android, or Web\u2014to solve real-world problems.',
    longDescription: 'In the CISC 310 course, students get the chance to vibe code a full mobile app. The creativity of students goes wild and many amazing products come out. Students utilize Cursor IDE for AI-assisted coding to develop one of iOS, Android, or a Web App to solve a problem they have or that they think people in general have.',
    skills: 'Basic comfort with computer tools.',
    status: 'open',
  },
  {
    id: 11,
    title: 'Self-Navigating Smart Sofa',
    lead: 'Scott Bohn',
    email: 'scotto.bohn@gmail.com',
    field: 'Computer Science / Engineering',
    description: 'A "Waymo on wheels" sofa controllable via remote control with obstacle avoidance, combining programming, machine learning, and mechanical engineering.',
    longDescription: 'A Waymo on wheels, this sofa will be controllable via remote control and faith in obstacle collision. Utilizing both programming and engineering principles, along with bay-area tech influence, the group attempts a twist on a conventional project by embedding autonomy into a seemingly comfortable couch.',
    skills: 'Programming, machine learning, mechanical engineering, electrical engineering, Solidworks/AutoCAD, and craftsmanship.',
    status: 'closed',
    showcaseFormat: 'Both: Table display and a scheduled presentation',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalSection, setModalSection] = useState<ModalSection>('details');
  const detailsRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);

  const openModal = (project: Project, section: ModalSection) => {
    setModalSection(section);
    setSelectedProject(project);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const target = modalSection === 'join' ? joinRef.current : detailsRef.current;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProject, modalSection]);

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
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card project-card--${project.status}`}
              variants={itemVariants}
            >
              <div className="project-card-header">
                <span className="project-field">{project.field}</span>
                <span className={`project-status-badge project-status-badge--${project.status}`}>
                  {project.status === 'open' ? 'Open' : 'Closed'}
                </span>
              </div>

              <h2 className="project-title">{project.title}</h2>

              <p className="project-team">Team Lead: {project.lead}</p>

              <p className="project-description">{project.description}</p>

              <div className="project-card-actions">
                <button
                  type="button"
                  className="project-read-more"
                  onClick={() => openModal(project, 'details')}
                >
                  Read More
                </button>
                <button
                  type="button"
                  className={`project-how-to-join${project.status === 'closed' ? ' project-how-to-join--disabled' : ''}`}
                  onClick={() => openModal(project, 'join')}
                  disabled={project.status === 'closed'}
                >
                  How to Join
                </button>
              </div>
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
              <div ref={detailsRef}>
                <h2 id="project-modal-title" className="project-modal-title">
                  {selectedProject.title}
                </h2>
                <p className="project-modal-team">Team Lead: {selectedProject.lead} · {selectedProject.field}</p>
                <div className="project-modal-description">
                  {selectedProject.longDescription.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="project-modal-skills">
                  <h3 className="project-modal-skills-title">Skills Needed</h3>
                  <p className="project-modal-skills-text">{selectedProject.skills}</p>
                </div>
              </div>

              <div ref={joinRef} className="project-modal-join">
                <h3 className="project-modal-join-title">How to Join</h3>
                {selectedProject.status === 'open' ? (
                  <>
                    <p className="project-modal-join-text">
                      Interested in joining this project? Reach out to the team lead to get started:
                    </p>
                    <a
                      className="project-modal-join-email"
                      href={`mailto:${selectedProject.email}`}
                    >
                      {selectedProject.email}
                    </a>
                  </>
                ) : (
                  <p className="project-modal-join-text">
                    This project is currently not accepting new members. Check back later or explore other open projects.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
