import Main from "./components/main";
import React from "react";
import About from "./components/about";
import Galary from "./components/galary";
import Navigation from "./components/Navigation";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const dishes = [
    {
      imageSrc: "./images/galary.jpg",
      title: "Speacial Pizza",  
    },
    { 
        imageSrc: "./images/galary.jpg",
        title: "Speacial Pizza",     
    },
    {
      imageSrc: "./images/galary.jpg",
      title: "Speacial Pizza",
    }
  ]
  return (
    <div className="App">
      <Navigation />
      <Main />
      <About />
      <Galary/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
