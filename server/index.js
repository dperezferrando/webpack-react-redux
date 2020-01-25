const express = require("express")
const path = require("path");
const app = express()
const PORT = process.env.PORT || 9001; 
const PUBLIC_DIR = path.join(__dirname, '/../public');



app.use("/api/test", (req, res) => res.send({ test: "hola "}));

app.use(express.static(PUBLIC_DIR));

app.get('/*', function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT,  () => console.log(`Server listening on port ${PORT}!`));