import React from 'react';

function CardText(props) {
    return(
        <div className=" mt-3 d-flex flex-row  rounded border border-1 ">
        <div className=" p-5 col-md-12 ">
            <strong><h2 align="center">{props.heading}</h2></strong>
            {props.text}
            </div>
            </div>
            

    );
}
export default CardText;