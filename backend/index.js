const express = require("express")

const app = express()

app.get('/', (req, res) => {
    return res.json('Hello World!')
})

app.listen(5000, () => console.log("listening on port 5000!"))
