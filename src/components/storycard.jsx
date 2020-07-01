import React from 'react';


function StoryCard(props) {
  return(
    <div class="mt-5 p-3 row d-flex flex-row  rounded border border-1">
      <div className="col-md-6">
        <img className="speak" src={require('./../speak.jpg')}/>
     </div>
      <div className="p-4 col-md-6">
        <p className="card-text"><h4><b>{props.heading}</b></h4>
          {props.text}</p>
          <p><button className="btn btn-primary">Share your Story</button>
        </p>
      </div>
    </div>  
  );
}
export default StoryCard;
