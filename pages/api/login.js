import jwt from 'jsonwebtoken';

const KEY = 'iebfjakbdsjkbhiandjksdbkvbdkjndakmmx-vwebvhjakdmsadm,.amd';
export default function (req, res) {
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
