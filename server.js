require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const helpRoutes = require("./routes/help");
const sessionRoutes = require("./routes/sessions");
const logRoutes = require("./routes/logs");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/help", helpRoutes);
app.use("/sessions", sessionRoutes);
app.use("/logs", logRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

    const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});