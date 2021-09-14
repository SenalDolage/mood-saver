const fs = require('fs');

const requestListener = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>All the feels</title></head>');
        res.write(
            '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Enter your mood below and hit send to save your mood.</p><form action="/mood" method="POST"><input type="text" name="mood" required><button type="submit">Send</button></body></html>'
        );
        return res.end();
    }

    if (url === '/mood' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const mood = parsedBody.split('=')[1];
            fs.writeFile('user_mood.txt', mood, () => { });
            return res.end();
        })
    }
}

module.exports = requestListener;
