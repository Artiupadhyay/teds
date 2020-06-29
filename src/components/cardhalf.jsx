import React from 'react';


function CardHalf(props) {
  return(
    <div className="card">
    <div className="wrapper">
      <iframe className="w-100 h-80" src={props.videoUrl} frameborder="0"
       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div className="card-body">
    <h5 className="card-title">{props.heading}</h5>
    <p className="card-text"> A webinar with {props.name}
    {props.text}
    </p>
</div>
    </div>
    </div>
      
    
  );
}
export default CardHalf;
