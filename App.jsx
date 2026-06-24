import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Words from './components/Words.jsx';
import Pillars from './components/Pillars.jsx';
import Services from './components/Services.jsx';
import Method from './components/Method.jsx';
import Portfolio from './components/Portfolio.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Words />
        <Pillars />
        <Services />
        <Method />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
