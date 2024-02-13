import React from "react"
import avatar from "../assets/img1.jpeg";
import avatar1 from "../assets/img2.jpeg";
import avatar2 from "../assets/img3.jpeg";
import avatar3 from "../assets/img4.jpeg";
import avatar4 from "../assets/img5.jpeg";


function Cards(){
    return (
        <div>
              <div className="row align-items-center flipo">
          <div className="col flip-card m-1">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar1} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar2} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar3} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="col flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={avatar4} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          
        </div> 
        </div>
    );
}

export default Cards;