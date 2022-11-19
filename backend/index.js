const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected With MongoDb");
});

mongoose.connection.on("error", (err) => {
    console.log("Error in Connection", err);
});

require("./modal/description.js");

app.use("/feynman", require("./routes/text.js"));

const port = process.env.PORT || 5000
app.listen(port, console.log(`Server is running on port ${port}`))