const { con, insertUser, register, login, insertMessage } = require("./db");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message/:variable1/:variable2", (req, res) => {
    const { variable1, variable2 } = req.params;
    res.json({ message: `Hello from server! You passed ${variable1} and ${variable2}` });
});

app.get("/register/:username/:password", (req, res) => {
  const { username, password } = req.params;
  register(username, password)
    .then(function(result) {
      if (result.success) {
        res.json({ success: true, message: `Registration successful!` });
      } else {
        res.json({ success: false, message: `Registration failed!` });
      }
    })
    .catch(function(err) {
      res.json({ success: false, message: `Registration failed!` });
    });
});

app.get("/login/:username/:password", (req, res) => {
  const { username, password } = req.params;
  login(username, password)
    .then(function(result) {
      console.log("Login result:", result.success);
      if (result.success) {
        res.json({ success: true, message: `Login successful!`, username: username });
      } else {
        res.json({ success: false, message: `Login failed!`, username: username });
      }
    })
    .catch(function(err) {
      console.log("Login error:", err);
      res.json({ message: `Login failed!` });
    });
});

app.get("/insertMessage/:username/:chatName/:chatNumber/:messages", (req, res) => {
  const { username, chatName, chatNumber, messages } = req.params;
  insertMessage(username, chatName, chatNumber, messages)
  res.json({ message: 'hello from insertMessage' })
});

app.get("/newchat/:messages", (req, res) => {
  const { messages } = req.params;
  if (messages.length() === 0){
    res.json({ isEmpty: true });
  } else {
    res.json({ isEmpty: false });
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
