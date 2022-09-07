const http = require('http');
const fs = require('fs/promises');

const hostname = '127.0.0.1';
const port = '8080';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');

  const url = new URL(req.url, `http://${req.headers.host}`);

  let htmlFilename;
  switch (url.pathname) {
    case '/': {
      htmlFilename = 'index.html';
      break;
    }
    case '/about': {
      htmlFilename = 'about.html';
      break;
    }
    case '/contact-me': {
      htmlFilename = 'contact-me.html';
      break;
    }
    default: {
      htmlFilename = '404.html';
      break;
    }
  }

  fs.readFile(__dirname + '/pages/' + htmlFilename, 'utf8')
  .then(html => {
    res.end(html);
  });
});

server.listen(port, hostname, () => {
  console.log('Server is running...');
})