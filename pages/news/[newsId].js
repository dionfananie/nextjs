import React from 'react';
import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();
    const id = router.query.newsId;
    return <h1>The {id} Page</h1>;
};

export default DetailPage;
