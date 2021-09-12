const requestListener = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader("Content-Type", 'text/html');
        res.write("<html><head><title>All the feels</title></head>");
        res.write(
            '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Enter your mood below and hit send to save your mood.</p><form action="/mood" method="POST"><input type="text" name="mood" required><button type="submit">Send</button></body></html>'
          );
        return res.end();
    }
}

module.exports = requestListener;
