const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
require("./passport.js");

dotenv.config();

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_KEY],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    // methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
