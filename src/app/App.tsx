import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Certificates } from "./components/Certificates";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        
      </main>
      <Footer />
      
    </div>
  );
}