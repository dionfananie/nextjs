import cookie from 'js-cookie';

const useCheckSession = () => {
    const session = cookie.get('token-auth');
    return { session: Boolean(session) };
};

export default useCheckSession;
