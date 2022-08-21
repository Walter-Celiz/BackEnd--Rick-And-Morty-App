const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");
const { PORT } = require("./src/utils/config/config");
const app = express();

// headers
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // js parser
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev")); // console output with morgan

// set headers
app.use(setHeaders);

// routes
app.use("/api", routes);

// middlewares
// error controller cuando haga next la ruta
app.use(errorHandler);

// server.listen
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
