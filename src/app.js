const express = require('express');
const swaggerDocument = require("./swagger.yaml");
const swaggerui = require("swagger-ui-express");
const app = express();
const port = 3003;

app.use(express.urlencoded());
app.use(express.json());


app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })