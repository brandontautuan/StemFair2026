import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import EventFlow from './pages/EventFlow';
import Requirements from './pages/Requirements';
import FAQ from './pages/FAQ';
import Projects from './pages/Projects';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Sponsors from './pages/Sponsors';
import ProposalForm from './pages/ProposalForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/proposal-form" element={<ProposalForm />} />
          <Route path="/event-flow" element={<EventFlow />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
