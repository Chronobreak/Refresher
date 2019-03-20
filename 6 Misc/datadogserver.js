const express = require('express')
const app = express()
const tracer = require('dd-trace').init()
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    dogstatsd.increment('node.request.count')
    res.send('Hello world from a Node.js app! Testing updated docker image')
})

app.get('/loaderio-6814a0e7456e4d9e6ff65bf378ff55bf', (req, res) => {
    res.send('loaderio-6814a0e7456e4d9e6ff65bf378ff55bf')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})