const express = require("express");
const {
  getNotes,
  getNoteById,
  UpdateNote,
  DeleteNote,
} = require("../controllers/noteControllers");
const { CreateNote } = require("../controllers/noteControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);
module.exports = router;
