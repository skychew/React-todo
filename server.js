var express = require('express');
var path = require('path');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
app.use(express.static('/'));
app.use(express.static('public'));
app.use(express.static('app/components/public'));
app.use(express.static(path.resolve(__dirname, './node_modules/react-icons/md')));


app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
