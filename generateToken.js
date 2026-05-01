const jwt = require("jsonwebtoken");

const API_KEY = "be4c8385-c70b-441c-9f45-b41f9babfca1";
const API_SECRET = "eb40db8046664d9ed4a143c56940f4fdf3965d14c03d0a55edf5dc168763eb41";

const payload = {
  apikey: API_KEY,
  permissions: ["allow_join", "allow_mod"],
};

const token = jwt.sign(payload, API_SECRET, {
  expiresIn: "1h",
});

console.log(token);