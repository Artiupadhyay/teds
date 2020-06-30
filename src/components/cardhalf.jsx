import React from 'react';


function CardHalf(props) {
  return(
    <div className="d-flex flex-column mt-5">
    <div className="wrapper row d-flex justify-content-between  rounded border border-1">
        <iframe className="w-100 h-100" src={props.videoUrl} frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    <div className="wrapper row d-flex justify-content-between border border-1">
      <h5 className="card-title">{props.heading}</h5>
      <p className="card-text"> A webinar with {props.name}
      {props.text}
      </p>
    </div>
    </div>
      
    
  );
}
export default CardHalf;
