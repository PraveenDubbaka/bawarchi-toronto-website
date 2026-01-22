import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise';
import Promotions from './pages/Promotions';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
