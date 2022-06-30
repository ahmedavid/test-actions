const express = require("express")
const app = express()

const users = ["User 1", "User 2", "User 3"]

app.get("/api", (req, res) => {
  return res.json({ message: "Hello API", data: [], status: "OK" })
})

app.get("/api/users", (req, res) => {
  return res.json({ message: "Users", data: users, status: "OK" })
})

const PORT = 3000
app.listen(PORT, () => console.log("server started on " + PORT))
