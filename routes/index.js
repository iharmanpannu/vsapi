const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const manufacturerController = require("../controllers/manufacturer");

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "App running" });
// });

router.get("/manufacturer", manufacturerController.all);

router.get("/products", productController.all);
router.get("/products/:id", productController.byId);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);

module.exports = router;
