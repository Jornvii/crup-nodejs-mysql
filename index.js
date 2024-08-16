const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

const { roleRoutes } = require("./src/routes/role.route"); 

roleRoutes(app); 

app.get("/", (req, res) => {
  res.send("Welcome API Node");
});

const PORT = 2024;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
