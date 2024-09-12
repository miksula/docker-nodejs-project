const express = require("express");
const app = express();

// Define routes
const indexRoutes = require("./routes/index");

// Set up routes
app.use("/", indexRoutes);

// Start the server
const port = process.env.PORT || 4001;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
