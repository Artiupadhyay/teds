import React from 'react';


function StoryCard(props) {
  return(
    <div class="row">
      <div className="col-md-6">
        <img className="speak" src={require('./../speak.jpg')}/></div>
  <div className="col-md-6">
  <p className="card-text"><h4><b>{props.heading}</b></h4>
    {props.text}
    </p>
      </div>
      </div>
  
    

     
  );
}
export default StoryCard;
