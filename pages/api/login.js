import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_SECRET_KEY;
export default function (req, res) {
    console.log(KEY);
    if (!req.body) {
        res.statusCode = 404;
        res.end('Error');
        return;
    }
    const { username, password } = req.body;

    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === 'admin' && password === 'admin'
            },
            KEY
        )
    });
}
