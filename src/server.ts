import express from "express";
import { readdirSync } from "fs";
import { sayHello } from "./controllers";
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger");
import { errorHandler } from "./middleware";
import cors from "cors";

const app = express();

//  Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//serve all routes dynamically using readdirsync
readdirSync("./src/routes").map((path) =>
  app.use("/api", require(`./routes/${path}`))
);
app.get("/", sayHello);
app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
