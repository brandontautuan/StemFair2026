import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import EventFlow from './pages/EventFlow';
import Requirements from './pages/Requirements';
import Industry from './pages/Industry';
import FAQ from './pages/FAQ';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Sponsors from './pages/Sponsors';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event-flow" element={<EventFlow />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
