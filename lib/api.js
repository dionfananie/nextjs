const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function fetchData() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
}

// const a = async () => {};
export const fetchContent = async (id) => {
    const response = await notion.blocks.children.list({
        block_id: id,
        page_size: 50
    });
    return response.results;
};
