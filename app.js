const express = require('express')
const app = express()
const port = 3000

const path = require('path');
console.log("__dirname: ", __dirname);
const data = require('./data/names.json');

//URL: http://localhost:3000/site
app.use('/site', express.static(path.join(__dirname, 'public')));

app.use((err, req, res, next) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");
    // we can output the err stack
    console.error(err.stack)
    // we can include other http status errors:
    res.status(500).send('Something broke!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// URL: http://localhost:3000/api/names
app.get('/names', (req, res) => {
    res.json(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})