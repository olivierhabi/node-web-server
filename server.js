const express = require ('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view enginse', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log')
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});


app.get('/', (req, res) => {
  res.render('my_account.hbs', {
    pageTitle: "My Account",
    welcomeText: "Welcome to Our site"
  });
});

app.get('/profile', (req, res) => {
  res.render('profile.hbs', {
    pageTitle: 'My Profile'
  });
});

app.get('/contacts', (req, res) => {
  res.render('contacts.hbs', {
    pageTitle: 'My Contacts'
  });
});

app.get('/groups', (req, res) => {
  res.render('groups.hbs', {
    pageTitle: 'Mys Groups'
  });
});

app.get('/orders', (req, res) => {
  res.render('orders.hbs', {
    pageTitle: 'My Orders'
  });
});

app.get('/send', (req, res) => {
  res.render('send.hbs', {
    pageTitle: 'Send'
  });
});

app.get('/custom', (req, res) => {
  res.render('custom.hbs', {
    pageTitle: 'Mys Groups'
  });
});

app.get('/sent', (req, res) => {
  res.render('sent.hbs', {
    pageTitle: 'Sent'
  });
});

app.get('/scheduled', (req, res) => {
  res.render('scheduled.hbs', {
    pageTitle: 'Scheduled'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});



app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
