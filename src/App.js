import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Honolulu" />
      </div>
      <footer>
        This project is coded by{" "}
        <a
          href="https://frolicking-dieffenbachia-8704e5.netlify.app/"
          title="Mai's portfolio"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          Mai Carlton
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/GitMaiHub/react-weather-project"
          title="Go to GitHub(external)"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://delicate-kheer-77ca0f.netlify.app/"
          title="View this project on Netlify(external)"
          target="_blank"
          rel="noreferrer"
          className="links"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}


