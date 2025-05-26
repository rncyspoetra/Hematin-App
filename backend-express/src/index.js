const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PredictionsRoute = require("./routes/predictions.routes");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use("/predictions", PredictionsRoute);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));