import useCheckSession from 'hooks/useCheckSession';
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
    return <div>{children}</div>;
};
Layout.propTypes = {
    children: node.isRequired
};
export default Layout;
