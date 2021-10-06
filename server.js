const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(port, () => {
  console.log(`API server now on port ${port}`);
});
