import React, {Fragment}from 'react';

const Card = (props) => {
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src = {`http://robohash.org/${props.id}200x200`}/>
            <Fragment>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </Fragment>
        </div>
    ) 
}
export default Card;