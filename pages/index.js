import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { arrayOf, object } from 'prop-types';
import MetaHead from 'components/MetaHead';

export default function Home() {
    return (
        <>
            <MetaHead />
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
