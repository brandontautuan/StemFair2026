import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Sponsors from './pages/Sponsors';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
