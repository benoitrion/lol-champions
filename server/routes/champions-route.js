import express from "express";

const router = express.Router();
import ChampionModel from "../models/champion-model.js";

router.get("/", (req, res) => {
  const pageNo = parseInt(req.query.pageNo);
  const size = parseInt(req.query.size);
  let query = {};
  if (pageNo < 0 || pageNo === 0) {
    res.send({
      message: "Invalid page number",
      type: "error"
    });
  }
  query.skip = size * (pageNo - 1);
  query.limit = size;
  ChampionModel.count({}, function(err, totalCount) {
    if (err) {
      res.send(err);
    }
    ChampionModel.find({}, {}, query, (err, champions) => {
      if (err) {
        res.send(err);
      } else {
        const totalPages = Math.ceil(totalCount / size);
        const response = { champions, pages: totalPages };
        res.json(response);
      }
    });
  });
});

router.get("/:id", (req, res) => {
  const query = { id: req.params.id };
  ChampionModel.findOne({}, {}, query, (err, champion) => {
    if (err) {
      res.send(err);
    }
    res.json(champion);
  });
});

export default router;
