import { useState } from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./Components/AppHeader";
import AppHero from "./Components/AppHero";
import Hero from "./Components/Hero";
import AppAbout from "./Components/AppAbout";
import AppServices from "./Components/AppServices";

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader></AppHeader>
      </header><br /><br />

      <main>


      <Hero></Hero> <br /> <br /> 
        <AppAbout></AppAbout> <br /> <br />
        <AppServices></AppServices>

      </main>
    </div>
  );
}

export default App;
