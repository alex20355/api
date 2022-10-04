const express = require("express");
const { sequelize , initDb }  = require("./src/db/sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8400;

app
  .use(bodyParser.json())
  .use(cors());

require('./src/route/index')(app)
require('./src/route/index_api')(app)
require('./src/route/findAll')(app)
require('./src/route/find')(app)
require('./src/route/delete')(app)
require('./src/route/create')(app)
require('./src/route/update')(app)

initDb()

//gestion erreur 404
app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

//port de l'application node api
app.listen(port, () =>
  console.log(
    `l'application Node est démarrée sur : http://localhost:${port}`
  )
);
