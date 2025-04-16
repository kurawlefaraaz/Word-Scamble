const express = require('express')
const app = express()
const port = 3000

app.use('/assets', express.static("assets"))
app.use('/', express.static("home"))
app.use('/about', express.static("about"))
app.use('/play', express.static("play"))


app.get('/commons.js', (req, res)=>{res.sendFile('/commons.js', {root: __dirname})})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})