import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer2';
import ScrollUp from './components/scrollup/ScrollUp';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme}/>

        <main className='main'>
          <Home />
          {/* <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div> */}
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Testimonials />
          <Contact />
        </main>

          <Footer />
          <ScrollUp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
