const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message/:variable1/:variable2", (req, res) => {
    const { variable1, variable2 } = req.params;
    res.json({ message: `Hello from server! You passed ${variable1} and ${variable2}` });
  });

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
