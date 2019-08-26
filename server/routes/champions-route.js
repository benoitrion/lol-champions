import express from "express";

const router = express.Router();
import ChampionModel from "../models/champion-model.js";

router.get("/", function(req, res) {
  ChampionModel.find(function(err, champions) {
    if (err) {
      res.send(err);
    }
    res.json(champions);
  });
});

export default router;
