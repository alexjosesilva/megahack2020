const routes = require("express").Router();

routes.route("/products").get((req, res) => {
  return res.json({ message: "products" });
});

module.exports = routes;
