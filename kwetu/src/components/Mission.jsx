import React from "react";
import "../App.css";
import NavBar from "./NavBar";

function Mission() {
  return (
    <div>
      <div className="mission-bg">
        <NavBar />
      </div>
      <div className="mission-content text-center">
        <h1 className=" mission text-center">Our Mission</h1>
        <p className="container fw-light fs-4 pb-5">
          To inspire and revolutionize young minds, setting in them a firm
          intellectual and <br />
          innovative foundation, which will allow them the best versions of
          themselves.
        </p>
        <div>
          <h3>Our Mantra</h3>
          <p className="container">
            Pay It Forward is the central message of how giving back is
            ingrained in the minds of ALL participants of this organization. We
            preach the philosophy of HELPING THREE (3) students with zero
            payment expectations. Each of the three students will in return look
            for THREE other students and render help freely. By adopting this
            philosophy, we help build a society and a country where each citizen
            extends their hand in lifting each other.
          </p>
        </div>
        <div>
          <h3>Financial Integrity </h3>
          <p className="container">
            We are a CASHLESS organization. The digital world has created a
            global village by creating transactional platforms where money
            exchange is via credit/debit cards, checks and MPSA. This will
            ensure that money donated will fall in the right accounts hence
            accurate, and integral accountability through audit will be FULLY
            accessible on our website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
