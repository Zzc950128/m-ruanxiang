const express = require('express')
const app = express()

app.use(express.static('project'))
app.listen(3000, () => console.log('app listening on port 3000!'))