import React from "react";
import NavBar from "./NavBar";
import "../App.css";
import Carousel from "./Carousel";
import Cards from "./Cards.jsx";


function Home() {
  return (
    <section >
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
     
      <div className="m-5 text-center">
          <h3>About the organization</h3>
          <p>
            The inception of Kwetu Pay It Forward Foundation is deeply rooted in
            the philosophy of GIVING BACK. We use a simple leadership model of
            working in tandem with communities and schools within, in finding
            solutions to inequities that surround the disparities in the Kenyan
            education system. World Bank estimates Kenyan literacy rate to be
            82%, where by 85% of the 25 million children enroll in Primary
            school, out of which 36% graduate high school and only 2% graduate
            college. Kenyan Primary Schools have the highest learner to computer
            ratio of 250 students against 1 computer (UNESCO Institute for
            Statistics, 2012). Our goal is to establish fully equipped top
            premier centers for academia in the marginalized & low resource
            communities. This will give every child an equal opportunity to
            access quality education, create a hybrid educational system (both
            online & in-class) and connect students to the world by bridging the
            computer literacy gap.
          </p>
        </div>
        <div>
        <Cards />
      </div>
      </div>
      
    
      {/* Rows for home flip card */}
    </section>
  );
}

export default Home;
