const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    // Show form
    if (req.method === "GET" && req.url === "/") {
        fs.readFile("pra.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    }

    // Handle form submission
    else if (req.method === "POST" && req.url === "/submit") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const formData = querystring.parse(body);

            console.log("Name:", formData.name);
            console.log("Email:", formData.email);

            // Redirect to next page
            res.writeHead(302, {
                Location: "/success"
            });

            res.end();
        });
    }

    // Next page
    else if (req.method === "GET" && req.url === "/success") {

        fs.readFile("success.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    }

    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:1800");
});