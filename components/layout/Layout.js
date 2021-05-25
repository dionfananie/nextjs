/* eslint-disable react/prop-types */
import React from 'react';
import MainNavigation from './MainNavigation';
// import './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className>{props.children}</main>
        </div>
    );
}

export default Layout;
