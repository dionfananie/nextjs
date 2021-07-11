import React from 'react';
import Block from '../../components/block';
import { fetchData } from '../../lib/api';
const { Client } = require('@notionhq/client');
import { arrayOf, object } from 'prop-types';
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const BlogPost = ({ content }) => {
    return (
        <>
            {/* <title>{title}</title> */}
            <main className="mx-4 md:container md:mx-auto my-4">
                {/* <h1 className="text-2xl md:text-4xl font-bold my-4">{title}</h1> */}
                {content.map((block) => (
                    <Block key={block.id} block={block} />
                ))}
            </main>
        </>
    );
};
BlogPost.propTypes = {
    content: arrayOf(object)
};
export default BlogPost;

export async function getStaticPaths() {
    const data = await fetchData();
    return {
        paths: data.map((el) => ({
            params: {
                id: el.id
            }
        })),
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const content = await notion.blocks.children.list({
        block_id: id,
        page_size: 50
    });
    return {
        props: {
            content: content.results
        }
    };
}
