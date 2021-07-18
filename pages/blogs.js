import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { arrayOf, object } from 'prop-types';
import { fetchData } from '../lib/api';
import Layout from 'components/Layout';

// in pages/index.js
export async function getStaticProps() {
    const data = await fetchData();
    return {
        props: {
            blogs: data
        }
    };
}

export default function Home({ blogs }) {
    const renderBlog = () => {
        if (blogs) {
            return (
                <>
                    {blogs.map((blog) => (
                        <Link passHref key={blog.id} href={`/blog/${blog.id}`}>
                            <a href>
                                <article className="shadow-md hover:shadow-xl p-4 mt-4">
                                    <h2>{blog.properties.Name.title[0]?.plain_text || ''}</h2>
                                </article>
                            </a>
                        </Link>
                    ))}
                </>
            );
        }
        return null;
    };
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>{renderBlog()}</main>

                <footer className={styles.footer}>Dion Fananie</footer>
            </div>
        </Layout>
    );
}

Home.propTypes = {
    blogs: arrayOf(object),
    page: arrayOf(object)
};
