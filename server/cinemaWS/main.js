const express = require("express")

const usersRouter = require("./routes/usersRouter")
const membersRouter = require("./routes/membersRouter")
const moviesRouter = require("./routes/moviesRouter")
const subscriptionsRouter = require("./routes/subscriptionsRouter")

const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/users",usersRouter)
app.use("/api/members",membersRouter)
app.use("/api/movies",moviesRouter)
app.use("/api/subscriptions",subscriptionsRouter)

require("./configs/database")

app.listen(5000)
console.log("Cinema server is running...")

