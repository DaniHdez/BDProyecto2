"use strict";
module.exports = function(app) {
  var todoList = require("../controllers/tecplaneController");

  // todoList Routes
  app
    .route("/aeropuerto")
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app
    .route("/aeropuerto/:idAeropuerto")
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
