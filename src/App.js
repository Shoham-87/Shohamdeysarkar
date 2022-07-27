import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Navbar from "./component/Navbar";
import BackgroundAnimation from "./component/BackgroundAnimation";
import About from "./component/About";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import Skills from "./component/Skills";

export default function App()
{
  return(<>
    <BackgroundAnimation />
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </>)
}