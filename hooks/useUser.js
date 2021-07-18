import cookie from 'js-cookie';
const useUser = async (username, password) => {
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then((t) => t.json());
    const token = res.token;
    if (token) {
        cookie.set('token-auth', token);
        return { message: 'Success!', user: true };
    } else {
        return { message: 'something went wrong', user: false };
    }
};

export default useUser;
