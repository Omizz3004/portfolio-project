const http = require('http');

const port = 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Onkar Kabure Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            color: #333;
        }
        header {
            background: #0077b6;
            color: white;
            text-align: center;
            padding: 40px 20px;
        }
        section {
            margin: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h2 {
            color: #0077b6;
        }
        footer {
            text-align: center;
            background: #023e8a;
            color: white;
            padding: 15px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Onkar Kabure</h1>
        <p>Roll No: 252190012</p>
        <p>M.Tech Software Engineering</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>I am passionate about DevOps, AWS Cloud, Full Stack Development, and Generative AI.</p>
    </section>

    <section>
        <h2>Skills</h2>
        <ul>
            <li>Java, Python, JavaScript</li>
            <li>AWS Cloud</li>
            <li>Docker & Kubernetes</li>
            <li>Jenkins CI/CD</li>
        </ul>
    </section>

    <section>
        <h2>Projects</h2>
        <ul>
            <li>Fake News Detection</li>
            <li>Underwater Image Enhancement</li>
            <li>DevOps Portfolio Deployment</li>
        </ul>
    </section>

    <footer>
        <p>© 2026 Onkar Kabure</p>
    </footer>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
});

server.listen(port, () => {
    console.log(`Portfolio running at http://localhost:${port}`);
});
