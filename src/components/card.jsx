import React from 'react';
import CardFull from './cardfull';
import CardHalf from './cardhalf';
import StoryCard from './storycard';
import CardText from './cardtext';
import Footer from './footer';

function Card(props) {
  return(
      <div className="container ">    
        <CardFull />
        <div className="row row d-flex justify-content-between">
          <CardHalf
          videoUrl="https://www.youtube.com/embed/R7DwiuU6Wwg"
          heading ="Step up your stay-home-story with Food Photography"
          name =" Nikko Pascua"
          text ="Nikko Pascua is a Filipino Photographer based in Sunny Singapore specialising in food & beverage photography. He is an Art Director at Food News Agency where he has worked on brands like Asia's 50 Best Restaurants, the Singapore Cocktail Festival,
          JW Marriott South Beach Singapore, Westholme, the Jigger & Pony Group, among others."
          />
          <CardHalf
          videoUrl="https://www.youtube.com/embed/VRKXFlfmWac"
          heading ="Travel and Lifestyle Content Creation with The Lost Two"
          name ="Claudia and Kaan"
          text ="Claudia and Kaan also know as “The Lost Two” are travel and lifestyle content creators who have traded in their 9-5 for a life full of adventure. They are conscious travelers who encourage
          sustainable tourism and aim to leave lasting, positive impacts on the places and people they visit."
          />
        </div>
        <StoryCard
          heading="Looking for speakers"
          text="We are a group of travellers and creatives organising webinars for the community.<br>
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
