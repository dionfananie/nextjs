import React from 'react';
import Link from 'next/link';
const NewsPage = () => {
    return (
        <>
            <h1>The News page</h1>
            <ul>
                <li>
                    <Link href="/news/good-news">Good News</Link>
                </li>
                <li>Something Else</li>
            </ul>
        </>
    );
};

export default NewsPage;
