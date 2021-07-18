import useCheckSession from 'hooks/useCheckSession';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { node } from 'prop-types';
import React, { useEffect } from 'react';

const Layout = ({ children }) => {
    const router = useRouter();
    const { session } = useCheckSession();
    useEffect(() => {
        if (!session) router.push('/login');
    }, []);
    if (!session) return null;
    return (
        <>
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
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://next.dionfananie.com/" />
                <meta property="twitter:title" content="Dion Fananie's React Playground " />
                <meta
                    property="twitter:description"
                    content="React Playground, Nextjs, Notion, Auth JWT, Many more. "
                />
                <meta property="twitter:image" content="" />
            </Head>
            <div>{children}</div>
        </>
    );
};
Layout.propTypes = {
    children: node.isRequired
};
export default Layout;
