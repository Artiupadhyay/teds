import React from 'react';

function CardText(props) {
    return(
        <div class="d-flex align-items-start flex-column">
  <div class="mb-3 mt-5">
            <strong><h2 align="center">{props.heading}</h2></strong>
            {props.text}
            </div>
            </div>

    );
}
export default CardText;