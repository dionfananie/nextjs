import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { arrayOf, object } from 'prop-types';
import Head from 'next/head';

export default function Home() {
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
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className="mb-5 text-7xl font-semibold">Dion Fananie</h1>
                    <Image
                        src="/image.jpg"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        alt="Picture of the author"
                        placeholder="blur"
                        height={150}
                        width={400}
                    />
                    <a
                        href="/blogs"
                        className="flex items-center justify-center px-10 mt-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600">
                        Blog
                    </a>
                </main>

                <footer className={styles.footer}>Dion Fananie</footer>
            </div>
        </>
    );
}

Home.propTypes = {
    blogs: arrayOf(object)
};
