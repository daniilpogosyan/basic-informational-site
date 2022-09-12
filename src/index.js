const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = '8080';

const pages = [
  {
    path: '/',
    html: 'index.html'
  },
  {
    path: '/about',
    html: 'about.html'
  },
  {
    path: '/contact-me',
    html: 'contact-me.html'
  },
  {
    path: '*',
    html: '404.html'
  }
];

function sendPage(page) {
  app.get(page.path, (req, res) => {
    res.sendFile(__dirname + '/pages/' + page.html);
  });
};

pages.forEach(page => sendPage(page));

app.listen(port, () => {
  console.log('Server is running...');
})
