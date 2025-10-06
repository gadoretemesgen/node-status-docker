const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";            // <— IMPORTANT

app.use(express.static(path.join(__dirname, "public")));
app.get("/api/status", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
