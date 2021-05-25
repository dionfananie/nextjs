import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    return (
        <NewMeetupForm
            onAddMeetup={(a) => {
                console.log(a);
            }}
        />
    );
};

export default NewMeetup;
