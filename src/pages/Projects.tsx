import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    status: 'closed',
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
  {
    id: 16,
    title: 'Animatronic Coyote #1 & #2',
    lead: 'Emily & Scott',
    email: 'dowellz@flc.losrios.edu',
    field: 'Biology / Computer Science / Engineering',
    description: 'Solar-powered Canada Goose\u2013scaring animatronic coyote built by the E-Donuts Engineering Club.',
    longDescription: 'Solar-powered Canada Goose scaring animatronic coyote. This project from the E-Donuts Engineering Club combines biology, computer science, and engineering to create animatronic coyotes that help manage wildlife in outdoor spaces.',
    skills: 'Curiosity, attention to details, microcontrollers and sensors, and digital fabrication.',
    status: 'closed',
    showcaseFormat: 'Both: Table display and a scheduled presentation',
  },
  {
    id: 17,
    title: 'The Symphony of Cacophony',
    lead: 'Emily Puthur Simon',
    email: 'w2153393@apps.losrios.edu',
    field: 'Physics / Engineering',
    description: 'Two student-engineered musical instruments: a custom Wind Synthesizer and a handcrafted Hurdy-Gurdy, exploring how engineering transforms digital and mechanical systems into expressive musical tools.',
    longDescription: 'The E-Donuts Engineering Club is proud to present two student-engineered musical instruments: a custom Wind Synthesizer and a handcrafted Hurdy-Gurdy. This project explores how engineering principles can transform both digital systems and mechanical structures into expressive musical tools.\n\nThe Wind Synthesizer is an electronic instrument that responds to breath pressure and finger inputs, much like a traditional wind instrument. Using pressure sensors, touch controls, and a microcontroller, the system converts breath intensity and fingering patterns into digital signals that generate sound. Students designed and programmed the instrument to demonstrate concepts such as signal processing, analog-to-digital conversion, waveform synthesis, and embedded systems engineering.\n\nIn contrast, the Hurdy-Gurdy showcases mechanical engineering at its finest. This centuries-old string instrument produces sound using a rotating wheel that continuously vibrates the strings, functioning like a mechanical bow. Students engineered the crank mechanism, string tension system, and keybox structure to precisely control pitch and resonance. Through this build, members applied principles of vibration, frequency, resonance, friction, and structural design.\n\nBy building them from the ground up, students gained hands-on experience in design iteration, prototyping, fabrication, programming, acoustics, and systems integration. This project demonstrates how engineering is not limited to circuits or code\u2014it can also be heard, felt, and performed.',
    skills: 'Circuit boards (e.g., Teensy 4.0), speaker, microphone, wires, soldering tools, wood, and wood cutters. All skills are welcome.',
    status: 'closed',
    showcaseFormat: 'Both: Table display and a scheduled presentation',
  },
  {
    id: 18,
    title: 'Project Northstar',
    lead: 'Josh Jovovich',
    email: 'joshuajovovich@gmail.com',
    field: 'Computer Science',
    description: 'A self-hostable live streaming platform that uses peer-to-peer WebRTC instead of a traditional CDN\u2014demonstrating decentralized streaming on standard web tech.',
    longDescription: 'Project Northstar is a self-hostable live streaming platform that shows how peer-to-peer networking can change how video streaming systems are built. Traditional platforms rely on centralized Content Delivery Networks (CDNs); Northstar explores WebRTC so viewers can receive streams directly from the broadcaster through encrypted peer-to-peer connections. A lightweight Node.js signaling server coordinates connection setup with WebSockets; once connected, video flows between participants with minimal central infrastructure.\n\nThe system uses WebRTC, WebSockets, JavaScript, HTML5, and Node.js, with real-time screen broadcasting, live chat, quality presets (720p/1080p), and codec options such as VP9 or H.264. It includes role-aware signaling, reconnection logic, and peer management for multiple viewers. See the project on GitHub: https://github.com/RxFaction/Northstar-Mainframe\n\nNorthstar will be demonstrated live across multiple devices to illustrate decentralized streaming on consumer hardware.',
    skills: 'Further development benefits from JavaScript and Node.js, WebSockets and WebRTC, distributed and peer-to-peer concepts, front-end web development, NAT/signaling, and media encoding. Standard hardware (laptops, phones, stable network) for testing; Node.js and modern browsers with WebRTC support.',
    status: 'open',
    showcaseFormat: 'Table: Stationary display for the duration of the fair',
  },
  {
    id: 19,
    title: 'Extending Classic Games Without Rewriting the Engine',
    lead: 'Tony Benavides',
    email: 'tony.benavides@flc.losrios.edu',
    field: 'Computer Science',
    description: 'A faculty presentation on a \u201cshim\u201d approach to modding\u2014a custom entry point that calls into the original engine so mods can load safely without a full engine rewrite.',
    longDescription: 'Many classic games were never built with mod support, yet communities still find ways to extend them. This talk explores a shim approach: building a replacement entry point that stands in for the original executable and calls into the same engine functions the game already uses. By treating the engine like an API, we create a structured, reliable pathway for customization without rewriting the engine itself.\n\nWith that adapter layer, the asset pipeline can redirect loading of content the game would not normally accept\u2014custom textures, scripts, and optional plugin modules\u2014through a modular loader focused on configuration, discovery, validation, load order, and logging.\n\nThe session is framed as a Learn by Doing STEM topic: mismatched signatures, ownership mistakes, timing issues, and format constraints become practical lessons in systems programming and architecture. The emphasis is on interoperability and controlled experimentation rather than bypassing protections.',
    skills: 'Game backend concepts, Python and C++ programming, and interest in reverse engineering and software architecture. (Student collaborators may use alternate contact as arranged with the instructor.)',
    status: 'closed',
    showcaseFormat: 'Present: Speaking in front of an audience/panel',
  },
  {
    id: 20,
    title: 'Analysis of US Car Accident Statistics',
    lead: 'Michael Sharp',
    email: 'miked.sharp90@gmail.com',
    field: 'Computer Science',
    description: 'An AI-driven system that analyzes datasets from Kaggle, automating data exploration and visualization to transform complex car accident data into clear, accessible insights.',
    longDescription: 'This project focuses on developing an AI-driven system that analyzes datasets from Kaggle and transforms complex information into clear, accessible insights. The goal is to bridge the gap between raw data and meaningful understanding by automating data exploration and visualization in a way that is both efficient and user-friendly.\n\nAt its core, the model ingests structured datasets and applies a combination of machine learning techniques and statistical analysis to identify patterns, trends, and key relationships within the data. Instead of requiring users to manually clean, process, and interpret the dataset, the system streamlines this workflow by handling these steps automatically. This allows users to quickly gain valuable insights without needing advanced data science expertise.\n\nOne of the key features of the project is its ability to generate intuitive visual outputs. The AI produces a range of graphs, tables, and summary statistics that present the data in a clear and digestible format. These visualizations are designed to highlight important findings, such as correlations, distributions, and anomalies, making it easier for users to understand and communicate results. Overall, this project aims to make data analysis more accessible, efficient, and insightful by combining AI automation with clear visual communication, enabling users to turn complex datasets into actionable knowledge.',
    skills: 'ChatGPT, Kaggle for data supply, and Google Colab for model creation.',
    status: 'closed',
    showcaseFormat: 'Table: Stationary display for the duration of the fair',
  },
  {
    id: 21,
    title: 'Price vs. Popularity: Understanding Market Trends on Steam',
    lead: 'Brighton Edmundson',
    email: 'Brightonedmu@gmail.com',
    field: 'Math / Computer Science',
    description: 'Exploring the relationship between video game pricing and popularity on Steam, using Python data analysis to understand how price influences player engagement and reviews.',
    longDescription: 'This project explores the relationship between the pricing of video games and popularity on the Steam platform. With the assistance of a large, in-depth dataset from Kaggle, the team seeks to understand if game price influences player engagement or sales. Specifically, they want to see how player feedback from reviews can help to correlate to a price of a game. Does spending more money on a game cause a player to have a deeper impression of it and thus review it if they like/dislike it?\n\nUsing data analysis tools with Python, pandas, and plotting libraries, the project identifies correlations that reveal how pricing impacts consumer behavior on the Steam digital marketplace.',
    skills: 'Exploratory data analysis, data cleaning, and interpretation. Python with pandas, numpy, matplotlib, and seaborn libraries for visualization and analysis.',
    status: 'closed',
    showcaseFormat: 'Both: Table display and a scheduled presentation',
  },
  {
    id: 22,
    title: 'Impact of Gaming on Mental Health',
    lead: 'Josiah Apodaca',
    email: 'josiahaapo@gmail.com',
    field: 'Computer Science',
    description: 'Applying machine learning to analyze and predict the effects of gaming behavior on mental health, classifying users into addiction risk levels from Low to Severe.',
    longDescription: 'This project explores how machine learning can be applied to analyze and predict the effects of gaming behavior on mental health. Using a synthetic dataset modeled after real-world data on gaming habits, lifestyle factors, and demographic characteristics, the objective is to develop a classification model that accurately identifies an individual\u2019s level of gaming addiction risk. The model categorizes users into four levels: Low, Moderate, High, and Severe, allowing for a more nuanced understanding of how gaming intensity may relate to mental health outcomes.\n\nBy examining patterns such as time spent gaming, sleep habits, social interaction, and other behavioral indicators, the project aims to uncover meaningful relationships within the data. Additionally, this analysis demonstrates how predictive analytics can be used as an early detection tool to identify individuals who may be at higher risk. Ultimately, the project highlights the potential for machine learning to support mental health awareness, encourage healthier gaming behaviors, and contribute to preventative strategies in both clinical and everyday settings.',
    skills: 'Python, prompt engineering, Google Colab, Jupyter notebooks, and machine learning.',
    status: 'closed',
    showcaseFormat: 'Table: Stationary display for the duration of the fair',
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

      <section className="projects-own-cta" aria-label="Start your own project">
        <p className="projects-own-cta-text">Interested in starting your own project?</p>
        <p className="projects-own-cta-sub">Submit a proposal and bring your idea to the fair.</p>
        <Link to="/proposal-form" className="projects-own-cta-btn">Submit a Proposal</Link>
      </section>

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
