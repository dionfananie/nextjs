import React from 'react';
import Layout from '../components/layout/layout.js';
import MeetupList from '../components/meetups/MeetupList.js';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A second Meetup',
        image: 'https://www.propertyinside.id/wp-content/uploads/2020/02/City-Landscape.jpg',
        address: 'Gotham City',
        description: 'This is Second meetup'
    },
    {
        id: 'm2',
        title: 'A third Meetup',
        image: 'https://www.propertyinside.id/wp-content/uploads/2020/02/City-Landscape.jpg',
        address: 'Jakarta City',
        description: 'This is Third meetup'
    }
];

const HomePage = () => {
    return (
        // <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
        // </Layout>
    );
};

export default HomePage;
