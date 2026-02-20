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
    title: 'Designing Tiny Molecules: My Summer Research Experience',
    lead: 'Emma Lawler',
    email: 'LawlerE@flc.losrios.edu',
    field: 'Chemistry / Biology',
    description: 'A presentation on research from the UC Berkeley C-GEM Summer Research Program, focusing on macrocyclic peptide chemistry and rational drug design.',
    longDescription: 'A talk based on research conducted during the UC Berkeley C-GEM Summer Research Program in the field of chemical biology with a focus on peptide chemistry.\n\nMacrocyclic peptides are highly valuable as a drug modality due to their size and rigidity, providing these scaffolds the ability to target "undruggable targets". Recent work from the Schepartz lab has demonstrated a novel way to additionally rigidify macrocyclic peptide conformations via a modified Friedl\u00e4nder reaction that installs a heterocyclic quinoline motif directly in the peptide backbone, producing a high rotational barrier around the adjacent chiral aryl-amide atropisomeric axis.\n\nThis work aims to elucidate the design rules for such peptides in three aspects: identifying the relationship between ring size and rotational barrier, elucidating the impact of peptide sequence on product distribution, and improving the solid-phase synthesis of these macrocycles by adapting new synthetic strategies. Expanding these design rules should lay the groundwork for the rational design of libraries of atropisomeric macrocycles to screen for peptides able to target "undruggable targets".',
    skills: 'Knowledge of peptide chemistry and chemical biology. A room with a projector is needed for the presentation.',
    status: 'closed',
    showcaseFormat: 'Present: Speaking in front of an audience/panel',
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
    title: 'MuseOn \u2014 A Music Platform for the Community',
    lead: 'Denis Polyakov',
    email: 'W2073713@apps.losrios.edu',
    field: 'Computer Science / Physics / Engineering',
    description: 'A social platform centered around bringing people closer through music, enabling participants to influence what plays next via multi-device Bluetooth connectivity.',
    longDescription: 'A social platform centered around bringing people closer through music. The app will enable participants to have a say in what music the speaker plays next. The focus of development is on creating a multi-device Bluetooth port that allows local devices to connect through the app, as well as curation of playlists to the context of the listeners and events.\n\nMuseOn assists students, athletes, and artists in forming and hosting semi-spontaneous events in their community. The app\u2019s central theme is music and its ability to unite; hosts create a plan (study group, pickup sports, art exposition), set a location, and a playlist, then publish their post on the app, which notifies members within a set radius. Passersby can also join by scanning a QR code or receiving a Bluetooth invitation.\n\nUpon joining the "bubble," members can link their music preferences through the app, which uses an algorithm based on the surrounding environment, set goals, and member preferences to pick the next song. Hosts are responsible for maintaining order at events and are assisted by the app. Hosts then receive a Mu score based on inputs and can credit participants for positive contributions, creating a system that reinforces positive behavior.',
    skills: 'App development, machine learning models, engineering, and audio processing software.',
    status: 'open',
    showcaseFormat: 'Table: Stationary display for the duration of the fair',
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
  {
    id: 12,
    title: 'FalconEye',
    lead: 'Connor Somers',
    email: 'w1896764@apps.losrios.edu',
    field: 'Computer Science',
    description: 'A high-performance, local AI assistant inspired by Ironman\u2019s J.A.R.V.I.S., built on the NVIDIA Jetson Orin Nano Super for on-device voice and visual intelligence.',
    longDescription: 'The FalconEye project is a high-performance, local AI assistant inspired by the seamless, intuitive interface of Ironman\u2019s J.A.R.V.I.S. At its core, FalconEye is built for the NVIDIA Jetson Orin Nano Super, turning this compact edge AI hardware into a digital assistant. It is designed to be "always-on" and "always-aware," processing voice and visual data locally to ensure maximum privacy, persistent memory, and minimal latency.\n\nBy utilizing advanced Small Language Models (SLMs) and optimized speech-text models, FalconEye achieves a level of responsiveness and intelligent reasoning that mirrors Ironman\u2019s J.A.R.V.I.S. To enable human-machine interaction, the project integrates a real-time visual overlay of information curated by the AI assistant. To achieve this product within a compact hardware footprint, the project focuses on extreme resource optimization. Every component (AI and software) is tuned to live within the device\u2019s unified memory, balancing complex neural networks with a fluid, high-frame-rate graphical interface.\n\nThe result is a sophisticated, "on-device" AI that demonstrates the power of modern edge computing: a portable, private, and powerful digital assistant.',
    skills: 'Python and JavaScript programming, Speech-Text and Small Language Models, Jetson Orin (Linux), and software engineering.',
    status: 'open',
    showcaseFormat: 'Table: Stationary display for the duration of the fair',
  },
  {
    id: 13,
    title: 'Exploring Test-Time Compute Techniques with Small Language Models',
    lead: 'Dr. Pablo Mu\u00f1oz',
    email: 'jpablomch@gmail.com',
    field: 'Computer Science / AI',
    description: 'Investigating whether low-resource inference-time techniques are more effective depending on AI model characteristics such as size, training data, or downstream task.',
    longDescription: 'Are some low-resource test-time techniques more effective depending on AI model characteristics (e.g., model size, training data, or downstream task)? Humans excel at generalization, and their intelligence is driven by outstanding sample efficiency. This level of generalization is not present in current artificial intelligence (AI) models. Until recently, to improve model performance, AI companies and research labs focused solely on scaling model pre-training. We are at an inflection point where the focus is shifting back to researching innovative inference-time techniques to improve model performance.\n\nStudents will learn the basics of state-of-the-art Transformer-based language models, explore the current literature on inference-time techniques to improve model accuracy, and conduct experiments with smaller models\u2014starting with simple context engineering techniques and progressing to more advanced ones depending on their results.\n\nStudents will compare the accuracy of small language models across several downstream tasks, with and without inference-time techniques. Expected outcomes include a literature review of test-time compute techniques and a report and presentation of results.',
    skills: 'Python programming skills to use high-level APIs.',
    status: 'open',
  },
  {
    id: 14,
    title: 'Predicting Air Quality Using Artificial Intelligence',
    lead: 'Ljiljana Morris',
    email: '',
    field: 'Computer Science / AI / Environmental Science',
    description: 'Using artificial intelligence and weather data to predict air quality, training machine learning models on public air quality and meteorological datasets.',
    longDescription: 'Can we use artificial intelligence and weather data to predict air quality? Air pollution affects health, especially for people with asthma or heart disease. Air quality depends on weather conditions like temperature, wind, and humidity. Artificial Intelligence (AI) can learn patterns from data and make predictions.\n\nThe team will use real, public data including PM2.5/AQI values from government air quality databases and weather data (temperature, humidity, wind speed). Students will clean and organize the data, then train a machine learning model such as Linear Regression or Random Forest to predict PM2.5 or AQI levels from weather inputs.\n\nAccuracy will be measured using Mean Absolute Error (MAE), with graphs comparing predicted vs. actual values and error over time. This type of AI model could be used to warn people about poor air quality, help cities plan traffic control, and improve public health responses.',
    skills: 'Data management, AI model building (Python), graph and visualization design, and presentation skills.',
    status: 'open',
  },
  {
    id: 15,
    title: 'How Things Work (and Sometimes Don\u2019t): Failure & Success Analysis of Engineering Marvels',
    lead: 'Dan Ross',
    email: '',
    field: 'Engineering / Physics',
    description: 'ENGR 420 Engineering Statics students present engaging analyses of famous engineering artifacts, exploring both triumphs and spectacular failures from a statics perspective.',
    longDescription: 'Come explore how engineers think, design, analyze, and learn\u2014by stepping into the world of both triumph and disaster! ENGR 420 (Engineering Statics) students from the Los Rios Community College District will present insightful and engaging analyses of well-known engineering artifacts, structures, and systems from a Statics perspective.\n\nStatics is the foundational study of forces on systems in equilibrium\u2014that means understanding why things stay still, how they hold up under load, and why they sometimes fail spectacularly. The presenters don\u2019t just explain how these technologies work; they also dive into what goes wrong due to technical challenges and human factors, and what we learn from those failures so future engineers can build safer, smarter systems.\n\nPresentations include: the 1999 Mars Climate Rover, the Space Shuttle Challenger Rocket, the Leaning Tower of Pisa, Statics of Slingshot Attractions, and Analysis of Bridge Types.',
    skills: 'Engineering statics fundamentals and physics of forces and equilibrium.',
    status: 'closed',
    showcaseFormat: 'Present: Speaking in front of an audience/panel',
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
