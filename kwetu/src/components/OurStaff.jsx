import React from "react";
import NavBar from "./NavBar";
import { FOUNDERS } from "../pages/Founders";


function OurStaff() {
  // console.log(FOUNDERS);
  return (
    <div className="bud">
      <div className="staff">
        <NavBar />
        <p className="fst-italic">
          "Each one should use whatever gift he has received to serve others"
          <br />
          <span>1st Peter 4:10</span>
        </p>
      </div>
      <div className="container row mx-auto mt-5">
        {FOUNDERS?.map((data) => (
          <div className="col-md-4 mt-5 founders">
            <img 
              className="img-fluid mb-3 "
              src={data.Image}
              alt="original"
            />
            <h5>{data.name}</h5>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurStaff;
