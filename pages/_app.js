/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/layout/Layout.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
