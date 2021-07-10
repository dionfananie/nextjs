import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailsPage = () => {
    return (
        <MeetupDetail
            title="First Meetup"
            image="https://www.propertyinside.id/wp-content/uploads/2020/02/City-Landscape.jpg"
            description="A First Meetup"
            address="Some Address, City"
        />
    );
};

export default MeetupDetailsPage;
