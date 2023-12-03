const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.delete("/files/:name", controller.remove);
  router.post("/putFile", controller.putFile);
  // router.get("/getFile", controller.getFile);

  app.use(router);
};

module.exports = routes;
