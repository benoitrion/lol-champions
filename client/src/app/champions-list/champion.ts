interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedoffset: number;
  attackspeedperlevel: number;
}

interface Sprite {
  url: string;
  x: number;
  y: number;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: string[];
  stats: Stats;
  icon: string;
  sprite: Sprite;
  description: string;
}
