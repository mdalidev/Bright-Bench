
// import './App.css';

import { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro";
import ProjectList from "./Components/ProjectList/ProjectList";
import Qualif from "./Components/Qualification/Qualif";
import Skills from "./Components/Skills/Skills";
import Social from "./Components/Socialmedia/Social";
import Toggle from "./Components/Toggle/Toggle";
import { ThemeContext } from "./context";
// import { ThemeProvider } from "./context";









function App() {
  const theme =useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode?"#222":"white",color:darkMode && "white"}} >

      <Header/>
<Intro/>
      <Toggle/>

  <About/>
<ProjectList/>
<Skills/>
<Qualif/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
