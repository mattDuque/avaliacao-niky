const express = require("express")
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 8081

const db = require("./app/models")
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Synced db.")
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message)
    })

app.use(express.json())
app.use(cors({ origin: true }))
app.use(express.urlencoded({ extended: true }))
require("./app/routes/turma.routes")(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})