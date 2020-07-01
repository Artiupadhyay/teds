import React from "react";

function CardFull(props) {
  return (

    <div className="rounded border border-1 row d-flex flex-row ">
      <div className=" col-md-8 bd-highlight ">
        <img
          className="pic"
          src={require("./../pic.jpeg")}
          class="card-img"
          alt="..."
        />
      </div>
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">Storytelling Through Colors</h5>
          <p className=" mt-3 card-text">
            <h5>
              <strong>A webinar about Color Grading with Mico Gonzales</strong>
            </h5>
            In this webinar, Mico will be sharing with us his knowledge and
            skills about his art of telling stories through colors - his
            photography journey as well as his techniques in color grading. Join
            us in this webinar and online discussion with Mico Gonzales.
            
            <h6 className="mt-3">30th May 2020 (Saturday), 9PM (GMT+8)</h6>
          </p>
        
          <button className=" mt-3 btn btn-primary">
            <h3>
              <b>Register Now</b>
            </h3>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default CardFull;
