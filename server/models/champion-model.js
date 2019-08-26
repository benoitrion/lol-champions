import mongoose from "mongoose";

const ChampionSchema = mongoose.Schema({
  id: String,
  key: String,
  name: String,
  title: String,
  tags: [String],
  stats: {
    hp: Number,
    hpperlevel: Number,
    mp: Number,
    mpperlevel: Number,
    movespeed: Number,
    armor: Number,
    armorperlevel: Number,
    spellblock: Number,
    spellblockperlevel: Number,
    attackrange: Number,
    hpregen: Number,
    hpregenperlevel: Number,
    mpregen: Number,
    mpregenperlevel: Number,
    crit: Number,
    critperlevel: Number,
    attackdamage: Number,
    attackdamageperlevel: Number,
    attackspeedoffset: Number,
    attackspeedperlevel: Number
  },
  stats: { url: String, x: Number, y: Number },
  icon: String,
  sprite: { url: String, x: Number, y: Number },
  description: String
});

const ChampionModel = mongoose.model("Champion", ChampionSchema);

export default ChampionModel;
