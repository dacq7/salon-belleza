import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light">
        {/* Barra de navegación */}
        <Navbar />

        {/* Secciones */}
        <main className="flex-grow">
          <Hero />
          <Services />
          <Team />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;





