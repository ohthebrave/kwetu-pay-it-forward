import React from "react";
import NavBar from "./NavBar";
import "../App.css";

function Home() {
  return (
    <section>
      <div className="home">
        <div className="home-content">
          <NavBar />
        </div>
        <p >Make a life-changing investment</p>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aperiam commodi, voluptates nostrum odit ab rem, porro inventore
          quaerat vero dolor sed corrupti, maiores deleniti amet recusandae
          earum! Fugit, natus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis placeat adipisci laborum, quidem nobis
          asperiores quas, quod alias aspernatur consequuntur officia minus quis
          voluptate, quo obcaecati labore! Delectus, odit alias!
        </div>
      </div>
    </section>
  );
}

export default Home;
