const express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const forceDomain = require('forcedomain');
var compression = require('compression');
const app = express();

app.use(compression());
app.use(forceDomain({
    hostname: 'sunnykurapati.com',
    protocol: 'https'
}));

// port
const port = 80;

// cors
app.use(cors());

app.use(bodyParser.json());


// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

const options = {
    key: fs.readFileSync("./cert/private.key"),
    cert: fs.readFileSync("./cert/certificate.crt")
};
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);