const express = require("express");
const { use } = require("react");
const app = express();
let PORT = 8000;
app.use(express.json());

let users = [];
let currentID = 1;

//get request
app.get("/users", (req, res) => {
  res.send(users);
});

//post request
app.post("/signup", (req, res) => {
  let { name, email, password } = req.body;
  const newUser = {
    id: currentID++,
    name,
    email,
    password,
  };
  users.push(newUser);
  // res.send(newUser);
  res.status(200).json({
    message: "user created successfully",
    newUser,
  });
});

//put request
app.put("/user/:id", (req, res) => {
  let { id } = req.params;
  let { name, email, password } = req.body;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }
  user.name = name;
  user.email = email;
  user.password = password;

  res.status(200).json({
    message: "user data updated successfully",
    user,
  });
});

//delete request
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;

  // const user = users.find((u) => u.id === parseInt(id));
  let user = users.findIndex((u) => u.id === parseInt(id));
  if (user === -1) {
    // if (!user) {
    res.status(404).json({
      message: "user not found",
    });
  }
  users.splice(user, 1);
  // user = users.filter((u) => u.id !== parseInt(id));
  res.status(200).json({
    message: "user delete successfully",
    users,
  });
});

//patch request
app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  let { name, email, password } = req.body;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return res.status(404).json({ message: "User not found" });

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;

  res.json({ message: "User data updated successfully", user });
});

app.listen(PORT, () => {
  console.log(`server is connected ${PORT}`);
});
