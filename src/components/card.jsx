import React from 'react';
import CardHalf from './cardhalf';
import StoryCard from './storycard';
import CardText from './cardtext';
import Footer from './footer';

function Card(props) {
  return(
      <div className="card ">
  <div className="row ">
    <div className="col-md-8">
    <img className="pic" src={require('./../pic.jpeg')}class="card-img" alt="..."/>
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Storytelling Through Colors</h5><br></br>
        <p className="card-text">
<h5><b>A webinar about Color Grading with Mico Gonzales</b></h5>
In this webinar, Mico will be sharing with us his knowledge and skills about his art of telling stories through colors - his photography journey as well as his techniques in color grading. Join us in this webinar and online discussion with Mico Gonzales.
<br></br><br></br><h6>30th May 2020 (Saturday), 9PM (GMT+8)</h6></p><br></br>
        <button className="btn btn-primary"><h3><b>Register Now</b></h3></button>
</div>
</div>
</div>
<div className="row">
  <div className="col-5">
  <CardHalf
  videoUrl="https://www.youtube.com/embed/R7DwiuU6Wwg"
  heading ="Step up your stay-home-story with Food Photography"
  name =" Nikko Pascua"
  text ="Nikko Pascua is a Filipino Photographer based in Sunny Singapore specialising in food & beverage photography. He is an Art Director at Food News Agency where he has worked on brands like Asia's 50 Best Restaurants, the Singapore Cocktail Festival,
  JW Marriott South Beach Singapore, Westholme, the Jigger & Pony Group, among others."
  />
  </div>
  <div className="col-5">
   <CardHalf
  
  videoUrl="https://www.youtube.com/embed/VRKXFlfmWac"
  heading ="Travel and Lifestyle Content Creation with The Lost Two"
  name ="Claudia and Kaan"
  text ="Claudia and Kaan also know as “The Lost Two” are travel and lifestyle content creators who have traded in their 9-5 for a life full of adventure. They are conscious travelers who encourage
  sustainable tourism and aim to leave lasting, positive impacts on the places and people they visit."
  />
  </div>
  </div>
  
    <StoryCard
heading="Looking for speakers"
text="We are a group of travellers and creatives organising webinars for the community.
Share your travel stories and experience with us, Speak with TEDS!"
/>
<CardText
  heading="QuaranTEDS"
  text="The Covid-19 pandemic is real and most of us are staying at home. While we are stuck in our own crib, why not make good use of this time by learning something new?"

/>
<CardText
  heading="About Us"
  text="We are a community of curious cats and creatives. We aim to connect like-minded people where we can learn, inspire and be inspired by one another 
  as we share and hone our individual talents and passions."
  
/>

        
  </div>  

  );
}
export default Card;
