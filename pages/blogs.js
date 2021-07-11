import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { arrayOf, object } from 'prop-types';
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// in pages/index.js
export async function getStaticProps() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({ database_id: databaseId });
    return {
        props: {
            blogs: response.results
        }
    };
}

export default function Home({ blogs }) {
    const renderBlog = () => {
        console.log(blogs);

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
        <div className={styles.container}>
            <main className={styles.main}>{renderBlog()}</main>

            <footer className={styles.footer}>Dion Fananie</footer>
        </div>
    );
}

Home.propTypes = {
    blogs: arrayOf(object)
};
