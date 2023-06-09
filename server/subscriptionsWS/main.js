const express = require("express");

const membersRouter = require("./routes/membersRouter")
const moviesRouter = require("./routes/moviesRouter")
const subscriptionsRouter = require("./routes/subscriptionsRouter")

const membersBL = require("./BL/membersBL")
const moviesBL = require("./BL/moviesBL")


const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/members", membersRouter)
app.use("/api/movies", moviesRouter)
app.use("/api/subscriptions", subscriptionsRouter)

require("./configs/database")

membersBL.loadMembersToMongoDB();
moviesBL.loadMoviesToMongoDB();

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Subscriptions server is running in port ${PORT}`);
})
