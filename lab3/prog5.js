import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <a href="/product">Product Page</a><br>
      <a href="/contact">Contact Us</a>
    `);
  } 
  else if (req.url === "/product") {
    res.end(`
      <h1>Iphone XL</h1>
      <h2>Price: 90000</h2>
      <h3>Discount: 30%</h3>
    `);
  } 
  else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1>");
  } 
  else {
    res.statusCode = 404;
    res.end(`
      <h1>Page Not Found</h1>
      <a href="/">Home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});