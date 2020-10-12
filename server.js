// (Basic) Server 
const express = require('express')
const app = express()

// Server accessing public folder
app.use(express.static('public'))

// Server (basic) running on port 3000
app.listen(3000, () => console.log('web server running on port 3000'))