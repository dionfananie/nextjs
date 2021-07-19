import Head from 'next/head';
import React from 'react';

const MetaHead = () => {
    return (
        <Head>
            <title>Dion Fananie&#39;s React Playground </title>
            <meta name="title" content="Dion Fananie's React Playground " />
            <meta
                name="description"
                content="React Playground, Nextjs, Notion, Auth JWT, Many more. "
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://next.dionfananie.com/" />
            <meta property="og:title" content="Dion Fananie's React Playground " />
            <meta
                property="og:description"
                content="React Playground, Nextjs, Notion, Auth JWT, Many more. "
            />
            <meta property="og:image" content="/preview.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://next.dionfananie.com/" />
            <meta property="twitter:title" content="Dion Fananie's React Playground " />
            <meta
                property="twitter:description"
                content="React Playground, Nextjs, Notion, Auth JWT, Many more. "
            />
            <meta property="twitter:image" content="/preview.png" />
        </Head>
    );
};

export default MetaHead;
