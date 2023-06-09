const express = require("express")

const usersRouter = require("./routes/usersRouter")
const authRouter = require("./routes/authRouter")
const membersRouter = require("./routes/membersRouter")
const moviesRouter = require("./routes/moviesRouter")
const subscriptionsRouter = require("./routes/subscriptionsRouter")

const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/users", usersRouter)
app.use("/api/auth", authRouter)
app.use("/api/members", membersRouter)
app.use("/api/movies", moviesRouter)
app.use("/api/subscriptions", subscriptionsRouter)

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

require("./configs/database")

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Cinema server is running in port ${PORT}`);
})


