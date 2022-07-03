var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Yes we made it guys" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Thank you for baring my demo" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
