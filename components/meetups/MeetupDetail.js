/* eslint-disable react/prop-types */
import React from 'react';

const MeetupDetail = (props) => {
    return (
        <>
            <img src={props.image} width="100%" alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </>
    );
};

export default MeetupDetail;
