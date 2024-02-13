import React from "react";
import NavBar from "./NavBar";
import "../App.css";
import Carousel from "./Carousel";
import Cards from "./Cards.jsx";

function Home() {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Cards />
      </div>
      {/* Rows for home flip card */}
    </section>
  );
}

export default Home;
