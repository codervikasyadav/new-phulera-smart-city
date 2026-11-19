import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import PhuleraSmartCity from './pages/PhuleraSmartCity';
import Dobri from './pages/Dobri';
import Infrastructure from './pages/Infrastructure';
import InvestmentGuide from './pages/InvestmentGuide';
import Research from './pages/Research';
import Enquiry from './pages/Enquiry';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/phulera-smart-city" element={<PhuleraSmartCity />} />
              <Route path="/dobri" element={<Dobri />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/investment-guide" element={<InvestmentGuide />} />
              <Route path="/research" element={<Research />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
