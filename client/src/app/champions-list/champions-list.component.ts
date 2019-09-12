import { Component, OnInit } from "@angular/core";
import { Champion } from "./champion";
import { ChampionsListService } from "./champions-list.service";

@Component({
  selector: "app-champions-list",
  templateUrl: "./champions-list.component.html",
  providers: [ChampionsListService],
  styleUrls: ["./champions-list.component.scss"]
})
export class ChampionsListComponent implements OnInit {
  champions: Champion[];

  constructor(private championsListService: ChampionsListService) {}

  ngOnInit() {
    this.champions = [
      {
        "id": "aatrox",
        "key": "266",
        "name": "Aatrox",
        "title": "the Darkin Blade",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 580,
        "hpperlevel": 85,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 6.5,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 70,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.04,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Aatrox.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 0,
        "y": 0
        },
        "description": "One of the ancient darkin, Aatrox was once a peerless swordmaster who reveled in the bloody chaos of the battlefield. Trapped within his own blade by the magic of his foes, he waited out the millennia for a suitable host to wield him—this mortal warrior..."
      },
      {
        "id": "ahri",
        "key": "103",
        "name": "Ahri",
        "title": "the Nine-Tailed Fox",
        "tags": [
        "Mage",
        "Assassin"
        ],
        "stats": {
        "hp": 526,
        "hpperlevel": 92,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 330,
        "armor": 20.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ahri.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 48,
        "y": 0
        },
        "description": "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature..."
      },
      {
        "id": "akali",
        "key": "84",
        "name": "Akali",
        "title": "the Fist of Shadow",
        "tags": [
        "Assassin"
        ],
        "stats": {
        "hp": 593,
        "hpperlevel": 90,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 350,
        "armor": 31.38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 3.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Akali.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 96,
        "y": 0
        },
        "description": "A prodigy in the fighting arts, Akali is a member of the martial order known as the Kinkou. She succeeds her mother as the Fist of Shadow, entrusted with the sacred duty to end those who would bring imbalance to her homeland. While some find her methods..."
      },
      {
        "id": "alistar",
        "key": "12",
        "name": "Alistar",
        "title": "the Minotaur",
        "tags": [
        "Tank",
        "Support"
        ],
        "stats": {
        "hp": 613.36,
        "hpperlevel": 106,
        "mp": 278.84,
        "mpperlevel": 38,
        "movespeed": 330,
        "armor": 44,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.1116,
        "attackdamageperlevel": 3.62,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.125
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Alistar.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 144,
        "y": 0
        },
        "description": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly..."
      },
      {
        "id": "amumu",
        "key": "32",
        "name": "Amumu",
        "title": "the Sad Mummy",
        "tags": [
        "Tank",
        "Mage"
        ],
        "stats": {
        "hp": 613.12,
        "hpperlevel": 84,
        "mp": 287.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 33,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.382,
        "mpregenperlevel": 0.525,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.38,
        "attackdamageperlevel": 3.8,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 2.18
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Amumu.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 192,
        "y": 0
        },
        "description": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe..."
      },
      {
        "id": "anivia",
        "key": "34",
        "name": "Anivia",
        "title": "the Cryophoenix",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 480,
        "hpperlevel": 82,
        "mp": 495,
        "mpperlevel": 25,
        "movespeed": 325,
        "armor": 21.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 600,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.68
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Anivia.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 240,
        "y": 0
        },
        "description": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland..."
      },
      {
        "id": "annie",
        "key": "1",
        "name": "Annie",
        "title": "the Dark Child",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 524,
        "hpperlevel": 88,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 335,
        "armor": 19.22,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 575,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.41,
        "attackdamageperlevel": 2.625,
        "attackspeedoffset": 0.08,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Annie.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 288,
        "y": 0
        },
        "description": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable..."
      },
      {
        "id": "ashe",
        "key": "22",
        "name": "Ashe",
        "title": "the Frost Archer",
        "tags": [
        "Marksman",
        "Support"
        ],
        "stats": {
        "hp": 539,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 32,
        "movespeed": 325,
        "armor": 26,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 600,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 2.96,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3.33
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ashe.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 336,
        "y": 0
        },
        "description": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice..."
      },
      {
        "id": "aurelionsol",
        "key": "136",
        "name": "Aurelion Sol",
        "title": "The Star Forger",
        "tags": [
        "Mage",
        "Fighter"
        ],
        "stats": {
        "hp": 562,
        "hpperlevel": 92,
        "mp": 350,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 19,
        "armorperlevel": 3.6,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/AurelionSol.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 384,
        "y": 0
        },
        "description": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his..."
      },
      {
        "id": "azir",
        "key": "268",
        "name": "Azir",
        "title": "the Emperor of the Sands",
        "tags": [
        "Mage",
        "Marksman"
        ],
        "stats": {
        "hp": 552,
        "hpperlevel": 92,
        "mp": 438,
        "mpperlevel": 21,
        "movespeed": 335,
        "armor": 19.04,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52,
        "attackdamageperlevel": 2.8,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Azir.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 432,
        "y": 0
        },
        "description": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended..."
      },
      {
        "id": "bard",
        "key": "432",
        "name": "Bard",
        "title": "the Wandering Caretaker",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 535,
        "hpperlevel": 89,
        "mp": 350,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 34,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 7.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Bard.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 0,
        "y": 48
        },
        "description": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic..."
      },
      {
        "id": "blitzcrank",
        "key": "53",
        "name": "Blitzcrank",
        "title": "the Great Steam Golem",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 582.6,
        "hpperlevel": 95,
        "mp": 267.2,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 44,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.54,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.13
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Blitzcrank.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 48,
        "y": 48
        },
        "description": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump..."
      },
      {
        "id": "brand",
        "key": "63",
        "name": "Brand",
        "title": "the Burning Vengeance",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 519.68,
        "hpperlevel": 88,
        "mp": 469,
        "mpperlevel": 21,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 10.665,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Brand.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 96,
        "y": 48
        },
        "description": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the..."
      },
      {
        "id": "braum",
        "key": "201",
        "name": "Braum",
        "title": "the Heart of the Freljord",
        "tags": [
        "Support",
        "Tank"
        ],
        "stats": {
        "hp": 576.16,
        "hpperlevel": 87,
        "mp": 310.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 1,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Braum.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 144,
        "y": 48
        },
        "description": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into..."
      },
      {
        "id": "caitlyn",
        "key": "51",
        "name": "Caitlyn",
        "title": "the Sheriff of Piltover",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 481,
        "hpperlevel": 91,
        "mp": 313.7,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 650,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.4,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 2.88,
        "attackspeedoffset": 0.1,
        "attackspeedperlevel": 4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Caitlyn.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 192,
        "y": 48
        },
        "description": "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a..."
      },
      {
        "id": "camille",
        "key": "164",
        "name": "Camille",
        "title": "the Steel Shadow",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 575.6,
        "hpperlevel": 85,
        "mp": 338.8,
        "mpperlevel": 32,
        "movespeed": 340,
        "armor": 35,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.8,
        "mpregen": 8.15,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Camille.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 240,
        "y": 48
        },
        "description": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy..."
      },
      {
        "id": "cassiopeia",
        "key": "69",
        "name": "Cassiopeia",
        "title": "the Serpent's Embrace",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 537,
        "hpperlevel": 87,
        "mp": 418,
        "mpperlevel": 31.5,
        "movespeed": 328,
        "armor": 25,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.034,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Cassiopeia.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 288,
        "y": 48
        },
        "description": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was..."
      },
      {
        "id": "chogath",
        "key": "31",
        "name": "Cho'Gath",
        "title": "the Terror of the Void",
        "tags": [
        "Tank",
        "Mage"
        ],
        "stats": {
        "hp": 574.4,
        "hpperlevel": 80,
        "mp": 272.2,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.206,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 4.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.44
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Chogath.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 336,
        "y": 48
        },
        "description": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts..."
      },
      {
        "id": "corki",
        "key": "42",
        "name": "Corki",
        "title": "the Daring Bombardier",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 518,
        "hpperlevel": 87,
        "mp": 350.16,
        "mpperlevel": 34,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.424,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 2.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Corki.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 384,
        "y": 48
        },
        "description": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He..."
      },
      {
        "id": "darius",
        "key": "122",
        "name": "Darius",
        "title": "the Hand of Noxus",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 582.24,
        "hpperlevel": 100,
        "mp": 263,
        "mpperlevel": 37.5,
        "movespeed": 340,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 10,
        "hpregenperlevel": 0.95,
        "mpregen": 6.6,
        "mpregenperlevel": 0.35,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Darius.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 432,
        "y": 48
        },
        "description": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that..."
      },
      {
        "id": "diana",
        "key": "131",
        "name": "Diana",
        "title": "Scorn of the Moon",
        "tags": [
        "Fighter",
        "Mage"
        ],
        "stats": {
        "hp": 594,
        "hpperlevel": 95,
        "mp": 372,
        "mpperlevel": 20,
        "movespeed": 345,
        "armor": 31,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 7.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.25
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Diana.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 0,
        "y": 96
        },
        "description": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued..."
      },
      {
        "id": "draven",
        "key": "119",
        "name": "Draven",
        "title": "the Glorious Executioner",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 574,
        "hpperlevel": 88,
        "mp": 360.56,
        "mpperlevel": 39,
        "movespeed": 330,
        "armor": 29,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.7,
        "mpregen": 8.042,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.61,
        "attackspeedoffset": -0.08,
        "attackspeedperlevel": 2.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Draven.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 48,
        "y": 96
        },
        "description": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and..."
      },
      {
        "id": "drmundo",
        "key": "36",
        "name": "Dr. Mundo",
        "title": "the Madman of Zaun",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 582.52,
        "hpperlevel": 89,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 36,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.27,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.8
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/DrMundo.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 96,
        "y": 96
        },
        "description": "Utterly insane, unrepentantly homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. This monosyllabic monstrosity seems to want nothing more than pain—both the giving of it, and the..."
      },
      {
        "id": "ekko",
        "key": "245",
        "name": "Ekko",
        "title": "the Boy Who Shattered Time",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 32,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 7,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ekko.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 144,
        "y": 96
        },
        "description": "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this..."
      },
      {
        "id": "elise",
        "key": "60",
        "name": "Elise",
        "title": "the Spider Queen",
        "tags": [
        "Mage",
        "Fighter"
        ],
        "stats": {
        "hp": 534,
        "hpperlevel": 85,
        "mp": 324,
        "mpperlevel": 50,
        "movespeed": 325,
        "armor": 27,
        "armorperlevel": 3.35,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.75
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Elise.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 192,
        "y": 96
        },
        "description": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly..."
      },
      {
        "id": "evelynn",
        "key": "28",
        "name": "Evelynn",
        "title": "Agony's Embrace",
        "tags": [
        "Assassin",
        "Mage"
        ],
        "stats": {
        "hp": 572,
        "hpperlevel": 84,
        "mp": 315.6,
        "mpperlevel": 42,
        "movespeed": 335,
        "armor": 37,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 8.108,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Evelynn.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 240,
        "y": 96
        },
        "description": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim..."
      },
      {
        "id": "ezreal",
        "key": "81",
        "name": "Ezreal",
        "title": "the Prodigal Explorer",
        "tags": [
        "Marksman",
        "Mage"
        ],
        "stats": {
        "hp": 491,
        "hpperlevel": 86,
        "mp": 360.6,
        "mpperlevel": 42,
        "movespeed": 325,
        "armor": 25,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 4,
        "hpregenperlevel": 0.55,
        "mpregen": 8.092,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ezreal.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 288,
        "y": 96
        },
        "description": "A self-assured Piltovan explorer with an uncanny ability to find his way into and out of trouble, Ezreal travels Runeterra in search of adventure. Armed with a magical gauntlet procured from the ruins of ancient Shurima, he seeks out the world's most..."
      },
      {
        "id": "fiddlesticks",
        "key": "9",
        "name": "Fiddlesticks",
        "title": "the Harbinger of Doom",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 524.4,
        "hpperlevel": 80,
        "mp": 500,
        "mpperlevel": 28,
        "movespeed": 335,
        "armor": 30,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 480,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 48.36,
        "attackdamageperlevel": 2.625,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.11
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Fiddlesticks.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 336,
        "y": 96
        },
        "description": "Fiddlesticks is a ghastly, living scarecrow who stalks the darkness, wielding a cruel scythe and preying upon the unwary. Once a lonely man accused of bringing famine to his village, he was tied up and left to starve in his own barren field. Resurrected..."
      },
      {
        "id": "fiora",
        "key": "114",
        "name": "Fiora",
        "title": "the Grand Duelist",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Fiora.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 384,
        "y": 96
        },
        "description": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in..."
      },
      {
        "id": "fizz",
        "key": "105",
        "name": "Fizz",
        "title": "the Tidal Trickster",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 570,
        "hpperlevel": 98,
        "mp": 317.2,
        "mpperlevel": 37,
        "movespeed": 335,
        "armor": 22.412,
        "armorperlevel": 3.4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Fizz.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion0.png",
        "x": 432,
        "y": 96
        },
        "description": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales..."
      },
      {
        "id": "galio",
        "key": "3",
        "name": "Galio",
        "title": "the Colossus",
        "tags": [
        "Tank",
        "Mage"
        ],
        "stats": {
        "hp": 562,
        "hpperlevel": 112,
        "mp": 500,
        "mpperlevel": 20,
        "movespeed": 335,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 9.335,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Galio.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 0,
        "y": 0
        },
        "description": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the..."
      },
      {
        "id": "gangplank",
        "key": "41",
        "name": "Gangplank",
        "title": "the Saltwater Scourge",
        "tags": [
        "Fighter"
        ],
        "stats": {
        "hp": 540,
        "hpperlevel": 82,
        "mp": 282,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 7.5,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Gangplank.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 48,
        "y": 0
        },
        "description": "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see..."
      },
      {
        "id": "garen",
        "key": "86",
        "name": "Garen",
        "title": "The Might of Demacia",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 616.28,
        "hpperlevel": 84.25,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 4.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.9
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Garen.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 96,
        "y": 0
        },
        "description": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its..."
      },
      {
        "id": "gnar",
        "key": "150",
        "name": "Gnar",
        "title": "the Missing Link",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 510,
        "hpperlevel": 65,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 325,
        "armor": 32,
        "armorperlevel": 2.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 175,
        "hpregen": 4.5,
        "hpregenperlevel": 1.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 6
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Gnar.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 144,
        "y": 0
        },
        "description": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed..."
      },
      {
        "id": "gragas",
        "key": "79",
        "name": "Gragas",
        "title": "the Rabble Rouser",
        "tags": [
        "Fighter",
        "Mage"
        ],
        "stats": {
        "hp": 583.52,
        "hpperlevel": 89,
        "mp": 400,
        "mpperlevel": 47,
        "movespeed": 330,
        "armor": 35,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.38,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.05
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Gragas.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 192,
        "y": 0
        },
        "description": "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster on his own quest for the perfect pint of ale. Hailing from parts unknown, he now searches for rare ingredients among the unblemished wastes of the Freljord, trying each recipe as he..."
      },
      {
        "id": "graves",
        "key": "104",
        "name": "Graves",
        "title": "the Outlaw",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 551.12,
        "hpperlevel": 92,
        "mp": 322.2,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 1,
        "attackrange": 425,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 7.9,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0.3,
        "attackspeedperlevel": 2.6
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Graves.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 240,
        "y": 0
        },
        "description": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his..."
      },
      {
        "id": "hecarim",
        "key": "120",
        "name": "Hecarim",
        "title": "the Shadow of War",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 580,
        "hpperlevel": 90,
        "mp": 277.2,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 36,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 7,
        "hpregenperlevel": 0.75,
        "mpregen": 6.5,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.0672,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Hecarim.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 288,
        "y": 0
        },
        "description": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his..."
      },
      {
        "id": "heimerdinger",
        "key": "74",
        "name": "Heimerdinger",
        "title": "the Revered Inventor",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 488,
        "hpperlevel": 87,
        "mp": 385,
        "mpperlevel": 20,
        "movespeed": 340,
        "armor": 19.04,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.536,
        "attackdamageperlevel": 2.7,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Heimerdinger.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 336,
        "y": 0
        },
        "description": "A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession, he thrives on answering the universe's..."
      },
      {
        "id": "illaoi",
        "key": "420",
        "name": "Illaoi",
        "title": "the Kraken Priestess",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 585.6,
        "hpperlevel": 95,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 35,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9.5,
        "hpregenperlevel": 0.8,
        "mpregen": 7.5,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Illaoi.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 384,
        "y": 0
        },
        "description": "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer..."
      },
      {
        "id": "irelia",
        "key": "39",
        "name": "Irelia",
        "title": "the Blade Dancer",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 350,
        "mpperlevel": 30,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 200,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Irelia.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 432,
        "y": 0
        },
        "description": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of..."
      },
      {
        "id": "ivern",
        "key": "427",
        "name": "Ivern",
        "title": "the Green Father",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 95,
        "mp": 450,
        "mpperlevel": 60,
        "movespeed": 325,
        "armor": 27,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.85,
        "mpregen": 6,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 3.4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ivern.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 0,
        "y": 48
        },
        "description": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow..."
      },
      {
        "id": "janna",
        "key": "40",
        "name": "Janna",
        "title": "the Storm's Fury",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 500,
        "hpperlevel": 70,
        "mp": 350,
        "mpperlevel": 64,
        "movespeed": 315,
        "armor": 28,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 46,
        "attackdamageperlevel": 1.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.95
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Janna.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 48,
        "y": 48
        },
        "description": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated..."
      },
      {
        "id": "jarvaniv",
        "key": "59",
        "name": "Jarvan IV",
        "title": "the Exemplar of Demacia",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 571.2,
        "hpperlevel": 90,
        "mp": 302.2,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 6.756,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.4,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/JarvanIV.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 96,
        "y": 48
        },
        "description": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front..."
      },
      {
        "id": "jax",
        "key": "24",
        "name": "Jax",
        "title": "Grandmaster at Arms",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 592.8,
        "hpperlevel": 85,
        "mp": 338.8,
        "mpperlevel": 32,
        "movespeed": 350,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.576,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69.97,
        "attackdamageperlevel": 3.375,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 3.4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jax.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 144,
        "y": 48
        },
        "description": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained..."
      },
      {
        "id": "jayce",
        "key": "126",
        "name": "Jayce",
        "title": "the Defender of Tomorrow",
        "tags": [
        "Fighter",
        "Marksman"
        ],
        "stats": {
        "hp": 576,
        "hpperlevel": 95,
        "mp": 357.2,
        "mpperlevel": 37,
        "movespeed": 335,
        "armor": 27,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.8,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jayce.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 192,
        "y": 48
        },
        "description": "Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. With his transforming hextech hammer in hand, Jayce uses his strength, courage, and considerable intelligence to protect his..."
      },
      {
        "id": "jhin",
        "key": "202",
        "name": "Jhin",
        "title": "the Virtuoso",
        "tags": [
        "Marksman",
        "Assassin"
        ],
        "stats": {
        "hp": 556,
        "hpperlevel": 91,
        "mp": 300,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 4.7,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 0
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jhin.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 240,
        "y": 48
        },
        "description": "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin..."
      },
      {
        "id": "jinx",
        "key": "222",
        "name": "Jinx",
        "title": "the Loose Cannon",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 531,
        "hpperlevel": 88,
        "mp": 245,
        "mpperlevel": 45,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.5,
        "mpregen": 6.7,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 57,
        "attackdamageperlevel": 3.4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Jinx.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 288,
        "y": 48
        },
        "description": "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx..."
      },
      {
        "id": "kaisa",
        "key": "145",
        "name": "Kai'Sa",
        "title": "Daughter of the Void",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 571,
        "hpperlevel": 86,
        "mp": 344.88,
        "mpperlevel": 38,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8.2,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 1.7,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 1.8
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kaisa.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 336,
        "y": 48
        },
        "description": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered..."
      },
      {
        "id": "kalista",
        "key": "429",
        "name": "Kalista",
        "title": "the Spear of Vengeance",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 534,
        "hpperlevel": 89,
        "mp": 231.8,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 23,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 6.3,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 3.6,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kalista.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 384,
        "y": 48
        },
        "description": "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing..."
      },
      {
        "id": "karma",
        "key": "43",
        "name": "Karma",
        "title": "the Enlightened One",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 534,
        "hpperlevel": 95,
        "mp": 374,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 20.384,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.544,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Karma.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 432,
        "y": 48
        },
        "description": "No champion exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life. With this insight, she serves as a..."
      },
      {
        "id": "karthus",
        "key": "30",
        "name": "Karthus",
        "title": "the Deathsinger",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 528,
        "hpperlevel": 87,
        "mp": 467,
        "mpperlevel": 30.5,
        "movespeed": 335,
        "armor": 20.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 6.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 45.66,
        "attackdamageperlevel": 3.25,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.11
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Karthus.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 0,
        "y": 96
        },
        "description": "The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of..."
      },
      {
        "id": "kassadin",
        "key": "38",
        "name": "Kassadin",
        "title": "the Void Walker",
        "tags": [
        "Assassin",
        "Mage"
        ],
        "stats": {
        "hp": 576,
        "hpperlevel": 90,
        "mp": 397.6,
        "mpperlevel": 67,
        "movespeed": 340,
        "armor": 23.376,
        "armorperlevel": 3.2,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 150,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58.852,
        "attackdamageperlevel": 3.9,
        "attackspeedoffset": -0.023,
        "attackspeedperlevel": 3.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kassadin.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 48,
        "y": 96
        },
        "description": "Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was..."
      },
      {
        "id": "katarina",
        "key": "55",
        "name": "Katarina",
        "title": "the Sinister Blade",
        "tags": [
        "Assassin",
        "Mage"
        ],
        "stats": {
        "hp": 602,
        "hpperlevel": 94,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 27.88,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.74
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Katarina.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 96,
        "y": 96
        },
        "description": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven..."
      },
      {
        "id": "kayle",
        "key": "10",
        "name": "Kayle",
        "title": "The Judicator",
        "tags": [
        "Fighter",
        "Support"
        ],
        "stats": {
        "hp": 586,
        "hpperlevel": 105,
        "mp": 375,
        "mpperlevel": 25,
        "movespeed": 335,
        "armor": 26.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51,
        "attackdamageperlevel": 2.2,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 2.2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kayle.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 144,
        "y": 96
        },
        "description": "A great hero and the strongest among her kind, Kayle is an angelic warrior dedicated to purging those beyond redemption. After conflict divided her people, she took up her enchanted armor and flaming sword in the name of order, disowning her very flesh..."
      },
      {
        "id": "kayn",
        "key": "141",
        "name": "Kayn",
        "title": "the Shadow Reaper",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 410,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 38,
        "armorperlevel": 3.3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 11.5,
        "mpregenperlevel": 0.95,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kayn.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 192,
        "y": 96
        },
        "description": "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of the Shadow into a new era of Ionian supremacy. He audaciously wields the sentient darkin weapon Rhaast, undeterred by its..."
      },
      {
        "id": "kennen",
        "key": "85",
        "name": "Kennen",
        "title": "the Heart of the Tempest",
        "tags": [
        "Mage",
        "Marksman"
        ],
        "stats": {
        "hp": 541,
        "hpperlevel": 84,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 29,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.544,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": -0.0947,
        "attackspeedperlevel": 3.4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kennen.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 240,
        "y": 96
        },
        "description": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his..."
      },
      {
        "id": "khazix",
        "key": "121",
        "name": "Kha'Zix",
        "title": "the Voidreaver",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 572.8,
        "hpperlevel": 85,
        "mp": 327.2,
        "mpperlevel": 40,
        "movespeed": 350,
        "armor": 36,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.59,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.1,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Khazix.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 288,
        "y": 96
        },
        "description": "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more..."
      },
      {
        "id": "kindred",
        "key": "203",
        "name": "Kindred",
        "title": "The Eternal Hunters",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 300,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 29,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 2.26,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kindred.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 336,
        "y": 96
        },
        "description": "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his..."
      },
      {
        "id": "kled",
        "key": "240",
        "name": "Kled",
        "title": "the Cantankerous Cavalier",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 340,
        "hpperlevel": 70,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Kled.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 384,
        "y": 96
        },
        "description": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the..."
      },
      {
        "id": "kogmaw",
        "key": "96",
        "name": "Kog'Maw",
        "title": "the Mouth of the Abyss",
        "tags": [
        "Marksman",
        "Mage"
        ],
        "stats": {
        "hp": 534,
        "hpperlevel": 88,
        "mp": 322.2,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 24,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.75,
        "hpregenperlevel": 0.55,
        "mpregen": 8.676,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": -0.06,
        "attackspeedperlevel": 2.65
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/KogMaw.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 432,
        "y": 96
        },
        "description": "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it..."
      },
      {
        "id": "leblanc",
        "key": "7",
        "name": "LeBlanc",
        "title": "the Deceiver",
        "tags": [
        "Assassin",
        "Mage"
        ],
        "stats": {
        "hp": 528,
        "hpperlevel": 92,
        "mp": 334,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.88,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Leblanc.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 0,
        "y": 0
        },
        "description": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone..."
      },
      {
        "id": "leesin",
        "key": "64",
        "name": "Lee Sin",
        "title": "the Blind Monk",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 570.8,
        "hpperlevel": 85,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.7,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69.18,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.04,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/LeeSin.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 48,
        "y": 0
        },
        "description": "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland..."
      },
      {
        "id": "leona",
        "key": "89",
        "name": "Leona",
        "title": "the Radiant Dawn",
        "tags": [
        "Tank",
        "Support"
        ],
        "stats": {
        "hp": 576.16,
        "hpperlevel": 87,
        "mp": 302.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 3.6,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.9
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Leona.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 96,
        "y": 0
        },
        "description": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her..."
      },
      {
        "id": "lissandra",
        "key": "127",
        "name": "Lissandra",
        "title": "the Ice Witch",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 518,
        "hpperlevel": 87,
        "mp": 475,
        "mpperlevel": 30,
        "movespeed": 325,
        "armor": 20.216,
        "armorperlevel": 3.7,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53,
        "attackdamageperlevel": 2.7,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Lissandra.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 144,
        "y": 0
        },
        "description": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The..."
      },
      {
        "id": "lucian",
        "key": "236",
        "name": "Lucian",
        "title": "the Purifier",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 571,
        "hpperlevel": 86,
        "mp": 348.88,
        "mpperlevel": 38,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 8.176,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 3.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Lucian.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 192,
        "y": 0
        },
        "description": "Once a Sentinel of Light, Lucian is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. Consumed by the need to avenge his dead wife, he will not rest until Thresh, the specter who holds her..."
      },
      {
        "id": "lulu",
        "key": "117",
        "name": "Lulu",
        "title": "the Fae Sorceress",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 525,
        "hpperlevel": 74,
        "mp": 350,
        "mpperlevel": 55,
        "movespeed": 330,
        "armor": 28.22,
        "armorperlevel": 3.7,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 11,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 46.368,
        "attackdamageperlevel": 2.6,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.25
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Lulu.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 240,
        "y": 0
        },
        "description": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this..."
      },
      {
        "id": "lux",
        "key": "99",
        "name": "Lux",
        "title": "the Lady of Luminosity",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 490,
        "hpperlevel": 85,
        "mp": 480,
        "mpperlevel": 23.5,
        "movespeed": 330,
        "armor": 18.72,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.54,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Lux.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 288,
        "y": 0
        },
        "description": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve..."
      },
      {
        "id": "malphite",
        "key": "54",
        "name": "Malphite",
        "title": "Shard of the Monolith",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 574.2,
        "hpperlevel": 90,
        "mp": 282.2,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 37,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 7.324,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.97,
        "attackdamageperlevel": 4,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 3.4
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Malphite.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 336,
        "y": 0
        },
        "description": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his..."
      },
      {
        "id": "malzahar",
        "key": "90",
        "name": "Malzahar",
        "title": "the Prophet of the Void",
        "tags": [
        "Mage",
        "Assassin"
        ],
        "stats": {
        "hp": 537,
        "hpperlevel": 87,
        "mp": 375,
        "mpperlevel": 27.5,
        "movespeed": 335,
        "armor": 18,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Malzahar.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 384,
        "y": 0
        },
        "description": "A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient..."
      },
      {
        "id": "maokai",
        "key": "57",
        "name": "Maokai",
        "title": "the Twisted Treant",
        "tags": [
        "Tank",
        "Mage"
        ],
        "stats": {
        "hp": 565,
        "hpperlevel": 95,
        "mp": 377.28,
        "mpperlevel": 43,
        "movespeed": 335,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.2,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63.54,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 2.125
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Maokai.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 432,
        "y": 0
        },
        "description": "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his..."
      },
      {
        "id": "masteryi",
        "key": "11",
        "name": "Master Yi",
        "title": "the Wuju Bladesman",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 598.56,
        "hpperlevel": 92,
        "mp": 250.56,
        "mpperlevel": 42,
        "movespeed": 355,
        "armor": 33,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7.5,
        "hpregenperlevel": 0.65,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.08,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/MasterYi.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 0,
        "y": 48
        },
        "description": "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of..."
      },
      {
        "id": "missfortune",
        "key": "21",
        "name": "Miss Fortune",
        "title": "the Bounty Hunter",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 541,
        "hpperlevel": 91,
        "mp": 325.84,
        "mpperlevel": 35,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 8.042,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50,
        "attackdamageperlevel": 2.7,
        "attackspeedoffset": -0.0473,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/MissFortune.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 48,
        "y": 48
        },
        "description": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally..."
      },
      {
        "id": "monkeyking",
        "key": "62",
        "name": "Wukong",
        "title": "the Monkey King",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 577.8,
        "hpperlevel": 85,
        "mp": 265.84,
        "mpperlevel": 38,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6,
        "hpregenperlevel": 0.65,
        "mpregen": 8.042,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 4,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/MonkeyKing.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 96,
        "y": 48
        },
        "description": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial..."
      },
      {
        "id": "mordekaiser",
        "key": "82",
        "name": "Mordekaiser",
        "title": "the Iron Revenant",
        "tags": [
        "Fighter"
        ],
        "stats": {
        "hp": 530,
        "hpperlevel": 78,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 325,
        "armor": 25,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 4,
        "hpregenperlevel": 0.3,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 5,
        "attackspeedoffset": 0.04,
        "attackspeedperlevel": 2.2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Mordekaiser.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 144,
        "y": 48
        },
        "description": "The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery and the force of his own dark will. Those who dare face..."
      },
      {
        "id": "morgana",
        "key": "25",
        "name": "Morgana",
        "title": "Fallen Angel",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 559.48,
        "hpperlevel": 90,
        "mp": 340.8,
        "mpperlevel": 60,
        "movespeed": 335,
        "armor": 25.384,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 15,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.46,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.53
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Morgana.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 192,
        "y": 48
        },
        "description": "Driven by vindictive obsession, Morgana is a potent mistress of suffering and the black arts. Once a being of grace and light, she was ripped from her kind during an ancient conflict that broke her soul, turning her into the cruel tormentor she is today..."
      },
      {
        "id": "nami",
        "key": "267",
        "name": "Nami",
        "title": "the Tidecaller",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 489.32,
        "hpperlevel": 74,
        "mp": 377.24,
        "mpperlevel": 43,
        "movespeed": 335,
        "armor": 29,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.208,
        "attackdamageperlevel": 3.1,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 2.61
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nami.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 240,
        "y": 48
        },
        "description": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred..."
      },
      {
        "id": "nasus",
        "key": "75",
        "name": "Nasus",
        "title": "the Curator of the Sands",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 561.2,
        "hpperlevel": 90,
        "mp": 325.6,
        "mpperlevel": 42,
        "movespeed": 350,
        "armor": 34,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.9,
        "mpregen": 7.44,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 67,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 3.48
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nasus.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 288,
        "y": 48
        },
        "description": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient..."
      },
      {
        "id": "nautilus",
        "key": "111",
        "name": "Nautilus",
        "title": "the Titan of the Depths",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 576.48,
        "hpperlevel": 86,
        "mp": 400,
        "mpperlevel": 47,
        "movespeed": 325,
        "armor": 35.46,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8.626,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0.02,
        "attackspeedperlevel": 1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nautilus.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 336,
        "y": 48
        },
        "description": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to..."
      },
      {
        "id": "nidalee",
        "key": "76",
        "name": "Nidalee",
        "title": "the Bestial Huntress",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 545,
        "hpperlevel": 85,
        "mp": 295.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 6,
        "hpregenperlevel": 0.6,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 3.22
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nidalee.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 384,
        "y": 48
        },
        "description": "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear..."
      },
      {
        "id": "nocturne",
        "key": "56",
        "name": "Nocturne",
        "title": "the Eternal Nightmare",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 582.8,
        "hpperlevel": 85,
        "mp": 273.8,
        "mpperlevel": 35,
        "movespeed": 345,
        "armor": 36,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 6.756,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 3.1,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nocturne.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 432,
        "y": 48
        },
        "description": "A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking..."
      },
      {
        "id": "nunu",
        "key": "20",
        "name": "Nunu",
        "title": "the Yeti Rider",
        "tags": [
        "Support",
        "Fighter"
        ],
        "stats": {
        "hp": 590,
        "hpperlevel": 90,
        "mp": 283.56,
        "mpperlevel": 42,
        "movespeed": 345,
        "armor": 28,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5,
        "hpregenperlevel": 0.8,
        "mpregen": 7.44,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 67,
        "attackdamageperlevel": 4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.25
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Nunu.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 0,
        "y": 96
        },
        "description": "Frolicking through the hills of the Freljord, Nunu and Willump make an unlikely pair, but many travellers would swear they have seen the yeti with a fearless boy clinging to his back. Though Nunu may have tamed the beast's heart, Willump's anger remains..."
      },
      {
        "id": "olaf",
        "key": "2",
        "name": "Olaf",
        "title": "the Berserker",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 597.24,
        "hpperlevel": 93,
        "mp": 315.6,
        "mpperlevel": 42,
        "movespeed": 350,
        "armor": 35,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.9,
        "mpregen": 7.466,
        "mpregenperlevel": 0.575,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 2.7
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Olaf.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 48,
        "y": 96
        },
        "description": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great..."
      },
      {
        "id": "orianna",
        "key": "61",
        "name": "Orianna",
        "title": "the Lady of Clockwork",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 530,
        "hpperlevel": 91,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 325,
        "armor": 17.04,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 40.368,
        "attackdamageperlevel": 2.6,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Orianna.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 96,
        "y": 96
        },
        "description": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice..."
      },
      {
        "id": "ornn",
        "key": "516",
        "name": "Ornn",
        "title": "The Fire below the Mountain",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 565.64,
        "hpperlevel": 90,
        "mp": 340.6,
        "mpperlevel": 45,
        "movespeed": 335,
        "armor": 33.04,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 9,
        "hpregenperlevel": 0.8,
        "mpregen": 8.01,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 67.72,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.08,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ornn.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 144,
        "y": 96
        },
        "description": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion..."
      },
      {
        "id": "pantheon",
        "key": "80",
        "name": "Pantheon",
        "title": "the Artisan of War",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 579.16,
        "hpperlevel": 87,
        "mp": 317.12,
        "mpperlevel": 31,
        "movespeed": 355,
        "armor": 37,
        "armorperlevel": 3.9,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 8,
        "hpregenperlevel": 0.65,
        "mpregen": 7.356,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 2.9,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 2.95
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Pantheon.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 192,
        "y": 96
        },
        "description": "The peerless warrior known as Pantheon is a nigh-unstoppable paragon of battle. He was born among the Rakkor, a warlike people living on the flanks of Mount Targon, and after climbing the mountain's treacherous peak and being deemed worthy, he was..."
      },
      {
        "id": "poppy",
        "key": "78",
        "name": "Poppy",
        "title": "Keeper of the Hammer",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 540,
        "hpperlevel": 90,
        "mp": 280,
        "mpperlevel": 40,
        "movespeed": 345,
        "armor": 38,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 7,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Poppy.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 240,
        "y": 96
        },
        "description": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said..."
      },
      {
        "id": "pyke",
        "key": "555",
        "name": "Pyke",
        "title": "the Bloodharbor Ripper",
        "tags": [
        "Support",
        "Assassin"
        ],
        "stats": {
        "hp": 600,
        "hpperlevel": 110,
        "mp": 380,
        "mpperlevel": 50,
        "movespeed": 330,
        "armor": 42,
        "armorperlevel": 4,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 5,
        "hpregenperlevel": 0.5,
        "mpregen": 8,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Pyke.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 288,
        "y": 96
        },
        "description": "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural..."
      },
      {
        "id": "quinn",
        "key": "133",
        "name": "Quinn",
        "title": "Demacia's Wings",
        "tags": [
        "Marksman",
        "Fighter"
        ],
        "stats": {
        "hp": 532.8,
        "hpperlevel": 85,
        "mp": 268.8,
        "mpperlevel": 35,
        "movespeed": 335,
        "armor": 32,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 3.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Quinn.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 336,
        "y": 96
        },
        "description": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two..."
      },
      {
        "id": "rakan",
        "key": "497",
        "name": "Rakan",
        "title": "The Charmer",
        "tags": [
        "Support"
        ],
        "stats": {
        "hp": 510,
        "hpperlevel": 85,
        "mp": 315,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 3.9,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 300,
        "hpregen": 5,
        "hpregenperlevel": 0.5,
        "mpregen": 8.75,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 70,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Rakan.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 384,
        "y": 96
        },
        "description": "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties..."
      },
      {
        "id": "rammus",
        "key": "33",
        "name": "Rammus",
        "title": "the Armordillo",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 564.48,
        "hpperlevel": 86,
        "mp": 310.44,
        "mpperlevel": 33,
        "movespeed": 335,
        "armor": 36,
        "armorperlevel": 4.3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.55,
        "mpregen": 7.84,
        "mpregenperlevel": 0.5,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.88,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.215
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Rammus.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion2.png",
        "x": 432,
        "y": 96
        },
        "description": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast..."
      },
      {
        "id": "reksai",
        "key": "421",
        "name": "Rek'Sai",
        "title": "the Void Burrower",
        "tags": [
        "Fighter"
        ],
        "stats": {
        "hp": 570,
        "hpperlevel": 85,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 335,
        "armor": 33,
        "armorperlevel": 3.75,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 7.5,
        "hpregenperlevel": 0.65,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65.5,
        "attackdamageperlevel": 3.35,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/RekSai.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 0,
        "y": 0
        },
        "description": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed..."
      },
      {
        "id": "renekton",
        "key": "58",
        "name": "Renekton",
        "title": "the Butcher of the Sands",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 572.16,
        "hpperlevel": 87,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.75,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 3.75,
        "attackspeedoffset": -0.06,
        "attackspeedperlevel": 2.65
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Renekton.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 48,
        "y": 0
        },
        "description": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed..."
      },
      {
        "id": "rengar",
        "key": "107",
        "name": "Rengar",
        "title": "the Pridestalker",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 90,
        "mp": 4,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Rengar.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 96,
        "y": 0
        },
        "description": "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who..."
      },
      {
        "id": "riven",
        "key": "92",
        "name": "Riven",
        "title": "the Exile",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 558.48,
        "hpperlevel": 86,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.2,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Riven.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 144,
        "y": 0
        },
        "description": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a..."
      },
      {
        "id": "rumble",
        "key": "68",
        "name": "Rumble",
        "title": "the Mechanized Menace",
        "tags": [
        "Fighter",
        "Mage"
        ],
        "stats": {
        "hp": 589,
        "hpperlevel": 85,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 30.88,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.6,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61.036,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 1.85
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Rumble.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 192,
        "y": 0
        },
        "description": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff..."
      },
      {
        "id": "ryze",
        "key": "13",
        "name": "Ryze",
        "title": "the Rune Mage",
        "tags": [
        "Mage",
        "Fighter"
        ],
        "stats": {
        "hp": 570.48,
        "hpperlevel": 98,
        "mp": 400,
        "mpperlevel": 50,
        "movespeed": 340,
        "armor": 21.552,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.112
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ryze.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 240,
        "y": 0
        },
        "description": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments..."
      },
      {
        "id": "sejuani",
        "key": "113",
        "name": "Sejuani",
        "title": "Fury of the North",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 560,
        "hpperlevel": 88,
        "mp": 400,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 31,
        "armorperlevel": 3,
        "spellblock": 27.1,
        "spellblockperlevel": 0.75,
        "attackrange": 150,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 7,
        "mpregenperlevel": 0.7,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Sejuani.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 288,
        "y": 0
        },
        "description": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans..."
      },
      {
        "id": "shaco",
        "key": "35",
        "name": "Shaco",
        "title": "the Demon Jester",
        "tags": [
        "Assassin"
        ],
        "stats": {
        "hp": 587,
        "hpperlevel": 89,
        "mp": 297.2,
        "mpperlevel": 40,
        "movespeed": 350,
        "armor": 30,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.156,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": -0.1,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Shaco.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 336,
        "y": 0
        },
        "description": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls..."
      },
      {
        "id": "shen",
        "key": "98",
        "name": "Shen",
        "title": "the Eye of Twilight",
        "tags": [
        "Tank"
        ],
        "stats": {
        "hp": 540,
        "hpperlevel": 85,
        "mp": 400,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Shen.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 384,
        "y": 0
        },
        "description": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit..."
      },
      {
        "id": "shyvana",
        "key": "102",
        "name": "Shyvana",
        "title": "the Half-Dragon",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 595,
        "hpperlevel": 95,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 350,
        "armor": 38,
        "armorperlevel": 3.35,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.8,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3.4,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Shyvana.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 432,
        "y": 0
        },
        "description": "Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan..."
      },
      {
        "id": "singed",
        "key": "27",
        "name": "Singed",
        "title": "the Mad Chemist",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 580,
        "hpperlevel": 85,
        "mp": 290.6,
        "mpperlevel": 45,
        "movespeed": 345,
        "armor": 37,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.55,
        "mpregen": 7.524,
        "mpregenperlevel": 0.55,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62.32,
        "attackdamageperlevel": 3.375,
        "attackspeedoffset": 0.02,
        "attackspeedperlevel": 1.81
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Singed.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 0,
        "y": 48
        },
        "description": "Singed is a Zaunite alchemist of unmatched intellect, who has devoted his life to pushing the boundaries of knowledge—with no price, even his own sanity, too high to pay. Is there a method to his madness? His concoctions rarely fail, but it appears to..."
      },
      {
        "id": "sion",
        "key": "14",
        "name": "Sion",
        "title": "The Undead Juggernaut",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 542.64,
        "hpperlevel": 73,
        "mp": 325.6,
        "mpperlevel": 42,
        "movespeed": 345,
        "armor": 32,
        "armorperlevel": 3,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 9,
        "hpregenperlevel": 0.8,
        "mpregen": 8.008,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 4,
        "attackspeedoffset": -0.08,
        "attackspeedperlevel": 1.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Sion.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 48,
        "y": 48
        },
        "description": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his..."
      },
      {
        "id": "sivir",
        "key": "15",
        "name": "Sivir",
        "title": "the Battle Mistress",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 532,
        "hpperlevel": 88,
        "mp": 284,
        "mpperlevel": 50,
        "movespeed": 335,
        "armor": 26,
        "armorperlevel": 3.25,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 3.25,
        "hpregenperlevel": 0.55,
        "mpregen": 8.012,
        "mpregenperlevel": 0.9,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.6
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Sivir.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 96,
        "y": 48
        },
        "description": "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her..."
      },
      {
        "id": "skarner",
        "key": "72",
        "name": "Skarner",
        "title": "the Crystal Vanguard",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 601.28,
        "hpperlevel": 90,
        "mp": 320,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 38,
        "armorperlevel": 3.8,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 9,
        "hpregenperlevel": 0.85,
        "mpregen": 7.206,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 65,
        "attackdamageperlevel": 4.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Skarner.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 144,
        "y": 48
        },
        "description": "Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as their souls are fused with powerful life crystals..."
      },
      {
        "id": "sona",
        "key": "37",
        "name": "Sona",
        "title": "Maven of the Strings",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 482.36,
        "hpperlevel": 77,
        "mp": 340.6,
        "mpperlevel": 45,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 49,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.03,
        "attackspeedperlevel": 2.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Sona.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 192,
        "y": 48
        },
        "description": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a..."
      },
      {
        "id": "soraka",
        "key": "16",
        "name": "Soraka",
        "title": "the Starchild",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 529.04,
        "hpperlevel": 78,
        "mp": 350.8,
        "mpperlevel": 60,
        "movespeed": 325,
        "armor": 32,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 2.5,
        "hpregenperlevel": 0.5,
        "mpregen": 11.5,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.14
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Soraka.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 240,
        "y": 48
        },
        "description": "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even..."
      },
      {
        "id": "swain",
        "key": "50",
        "name": "Swain",
        "title": "the Noxian Grand General",
        "tags": [
        "Mage",
        "Fighter"
        ],
        "stats": {
        "hp": 525,
        "hpperlevel": 90,
        "mp": 468,
        "mpperlevel": 28.5,
        "movespeed": 335,
        "armor": 22.72,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 7,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 2.7,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.11
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Swain.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 288,
        "y": 48
        },
        "description": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new..."
      },
      {
        "id": "syndra",
        "key": "134",
        "name": "Syndra",
        "title": "the Dark Sovereign",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 523,
        "hpperlevel": 90,
        "mp": 480,
        "mpperlevel": 30,
        "movespeed": 330,
        "armor": 24.712,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.872,
        "attackdamageperlevel": 2.9,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Syndra.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 336,
        "y": 48
        },
        "description": "Syndra is a fearsome dark mage with incredible power at her command. As a child of Ionia, she disturbed the village elders with her prodigious but reckless use of magic. They sent her away to be trained under strict supervision, but she quickly..."
      },
      {
        "id": "tahmkench",
        "key": "223",
        "name": "Tahm Kench",
        "title": "the River King",
        "tags": [
        "Support",
        "Tank"
        ],
        "stats": {
        "hp": 610,
        "hpperlevel": 95,
        "mp": 325,
        "mpperlevel": 40,
        "movespeed": 335,
        "armor": 47,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 1,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/TahmKench.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 384,
        "y": 48
        },
        "description": "Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a..."
      },
      {
        "id": "taliyah",
        "key": "163",
        "name": "Taliyah",
        "title": "the Stoneweaver",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 532,
        "hpperlevel": 90,
        "mp": 425,
        "mpperlevel": 30,
        "movespeed": 340,
        "armor": 20,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 7,
        "hpregenperlevel": 0.7,
        "mpregen": 9.335,
        "mpregenperlevel": 0.85,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Taliyah.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 432,
        "y": 48
        },
        "description": "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe..."
      },
      {
        "id": "talon",
        "key": "91",
        "name": "Talon",
        "title": "the Blade's Shadow",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 588,
        "hpperlevel": 95,
        "mp": 377.2,
        "mpperlevel": 37,
        "movespeed": 335,
        "armor": 30,
        "armorperlevel": 3.5,
        "spellblock": 39,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.75,
        "mpregen": 7.6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.1,
        "attackspeedoffset": -0.065,
        "attackspeedperlevel": 2.9
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Talon.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 0,
        "y": 96
        },
        "description": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive..."
      },
      {
        "id": "taric",
        "key": "44",
        "name": "Taric",
        "title": "the Shield of Valoran",
        "tags": [
        "Support",
        "Fighter"
        ],
        "stats": {
        "hp": 575,
        "hpperlevel": 90,
        "mp": 300,
        "mpperlevel": 60,
        "movespeed": 340,
        "armor": 40,
        "armorperlevel": 3.4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 150,
        "hpregen": 6,
        "hpregenperlevel": 0.5,
        "mpregen": 8.5,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Taric.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 48,
        "y": 96
        },
        "description": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a..."
      },
      {
        "id": "teemo",
        "key": "17",
        "name": "Teemo",
        "title": "the Swift Scout",
        "tags": [
        "Marksman",
        "Assassin"
        ],
        "stats": {
        "hp": 528,
        "hpperlevel": 90,
        "mp": 334,
        "mpperlevel": 20,
        "movespeed": 330,
        "armor": 24.3,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 500,
        "hpregen": 5.5,
        "hpregenperlevel": 0.65,
        "mpregen": 9.6,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.0947,
        "attackspeedperlevel": 3.38
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Teemo.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 96,
        "y": 96
        },
        "description": "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes..."
      },
      {
        "id": "thresh",
        "key": "412",
        "name": "Thresh",
        "title": "the Chain Warden",
        "tags": [
        "Support",
        "Fighter"
        ],
        "stats": {
        "hp": 560.52,
        "hpperlevel": 93,
        "mp": 273.92,
        "mpperlevel": 44,
        "movespeed": 335,
        "armor": 28,
        "armorperlevel": 0,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 7,
        "hpregenperlevel": 0.55,
        "mpregen": 6,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 56,
        "attackdamageperlevel": 2.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Thresh.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 144,
        "y": 96
        },
        "description": "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he sought a power greater than life or death, and now sustains himself by tormenting and breaking others with slow..."
      },
      {
        "id": "tristana",
        "key": "18",
        "name": "Tristana",
        "title": "the Yordle Gunner",
        "tags": [
        "Marksman",
        "Assassin"
        ],
        "stats": {
        "hp": 559,
        "hpperlevel": 88,
        "mp": 246.76,
        "mpperlevel": 32,
        "movespeed": 325,
        "armor": 26,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.75,
        "hpregenperlevel": 0.65,
        "mpregen": 7.206,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 61,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": -0.0473,
        "attackspeedperlevel": 1.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Tristana.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 192,
        "y": 96
        },
        "description": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her..."
      },
      {
        "id": "trundle",
        "key": "48",
        "name": "Trundle",
        "title": "the Troll King",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 616.28,
        "hpperlevel": 96,
        "mp": 281.6,
        "mpperlevel": 45,
        "movespeed": 350,
        "armor": 37,
        "armorperlevel": 2.7,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 7.508,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.0672,
        "attackspeedperlevel": 2.9
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Trundle.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 240,
        "y": 96
        },
        "description": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his..."
      },
      {
        "id": "tryndamere",
        "key": "23",
        "name": "Tryndamere",
        "title": "the Barbarian King",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 625.64,
        "hpperlevel": 98,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 33,
        "armorperlevel": 3.1,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8.5,
        "hpregenperlevel": 0.9,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 69,
        "attackdamageperlevel": 3.7,
        "attackspeedoffset": -0.0672,
        "attackspeedperlevel": 2.9
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Tryndamere.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 288,
        "y": 96
        },
        "description": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the..."
      },
      {
        "id": "twistedfate",
        "key": "4",
        "name": "Twisted Fate",
        "title": "the Card Master",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 534,
        "hpperlevel": 94,
        "mp": 333,
        "mpperlevel": 19,
        "movespeed": 335,
        "armor": 20.542,
        "armorperlevel": 3.15,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 49.954,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": -0.04,
        "attackspeedperlevel": 3.22
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/TwistedFate.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 336,
        "y": 96
        },
        "description": "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking..."
      },
      {
        "id": "twitch",
        "key": "29",
        "name": "Twitch",
        "title": "the Plague Rat",
        "tags": [
        "Marksman",
        "Assassin"
        ],
        "stats": {
        "hp": 542,
        "hpperlevel": 87,
        "mp": 287.2,
        "mpperlevel": 40,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.75,
        "hpregenperlevel": 0.6,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": -0.08,
        "attackspeedperlevel": 3.38
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Twitch.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 384,
        "y": 96
        },
        "description": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really..."
      },
      {
        "id": "udyr",
        "key": "77",
        "name": "Udyr",
        "title": "the Spirit Walker",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 593.32,
        "hpperlevel": 99,
        "mp": 270.4,
        "mpperlevel": 30,
        "movespeed": 345,
        "armor": 34,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 6,
        "hpregenperlevel": 0.75,
        "mpregen": 7.506,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 5,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.67
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Udyr.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion3.png",
        "x": 432,
        "y": 96
        },
        "description": "Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits' bestial natures, Udyr can harness their unique strengths: The tiger grants him speed and ferocity, the turtle resilience, the..."
      },
      {
        "id": "urgot",
        "key": "6",
        "name": "Urgot",
        "title": "the Dreadnought",
        "tags": [
        "Fighter",
        "Marksman"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 88,
        "mp": 300,
        "mpperlevel": 45,
        "movespeed": 330,
        "armor": 39,
        "armorperlevel": 4.25,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 350,
        "hpregen": 7.5,
        "hpregenperlevel": 0.7,
        "mpregen": 7.25,
        "mpregenperlevel": 0.6,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.75
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Urgot.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 0,
        "y": 0
        },
        "description": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that..."
      },
      {
        "id": "varus",
        "key": "110",
        "name": "Varus",
        "title": "the Arrow of Retribution",
        "tags": [
        "Marksman",
        "Mage"
        ],
        "stats": {
        "hp": 549,
        "hpperlevel": 86,
        "mp": 360.48,
        "mpperlevel": 33,
        "movespeed": 330,
        "armor": 27,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 575,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 7.34,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 59,
        "attackdamageperlevel": 3.11,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Varus.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 48,
        "y": 0
        },
        "description": "One of the ancient race of darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Darkin War, but escaped centuries later in the remade..."
      },
      {
        "id": "vayne",
        "key": "67",
        "name": "Vayne",
        "title": "the Night Hunter",
        "tags": [
        "Marksman",
        "Assassin"
        ],
        "stats": {
        "hp": 515,
        "hpperlevel": 89,
        "mp": 231.8,
        "mpperlevel": 35,
        "movespeed": 330,
        "armor": 23,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 3.5,
        "hpregenperlevel": 0.55,
        "mpregen": 6.972,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2.36,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 3.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Vayne.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 96,
        "y": 0
        },
        "description": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when..."
      },
      {
        "id": "veigar",
        "key": "45",
        "name": "Veigar",
        "title": "the Tiny Master of Evil",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 505,
        "hpperlevel": 94,
        "mp": 490,
        "mpperlevel": 26,
        "movespeed": 340,
        "armor": 22.55,
        "armorperlevel": 3.75,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 50.71,
        "attackdamageperlevel": 2.625,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.24
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Veigar.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 144,
        "y": 0
        },
        "description": "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been..."
      },
      {
        "id": "velkoz",
        "key": "161",
        "name": "Vel'Koz",
        "title": "the Eye of the Void",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 520,
        "hpperlevel": 88,
        "mp": 469,
        "mpperlevel": 21,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.9379,
        "attackdamageperlevel": 3.1416,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Velkoz.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 192,
        "y": 0
        },
        "description": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to..."
      },
      {
        "id": "vi",
        "key": "254",
        "name": "Vi",
        "title": "the Piltover Enforcer",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 585,
        "hpperlevel": 85,
        "mp": 295,
        "mpperlevel": 45,
        "movespeed": 340,
        "armor": 30,
        "armorperlevel": 4,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 10,
        "hpregenperlevel": 1,
        "mpregen": 8,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 64,
        "attackdamageperlevel": 3.5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Vi.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 240,
        "y": 0
        },
        "description": "Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive..."
      },
      {
        "id": "viktor",
        "key": "112",
        "name": "Viktor",
        "title": "the Machine Herald",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 528.04,
        "hpperlevel": 90,
        "mp": 405,
        "mpperlevel": 25,
        "movespeed": 335,
        "armor": 22.72,
        "armorperlevel": 4,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 8,
        "hpregenperlevel": 0.65,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 52.04,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.11
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Viktor.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 288,
        "y": 0
        },
        "description": "The herald of a new age of technology, Viktor has devoted his life to the advancement of humankind. An idealist who seeks to lift the people of Zaun to a new level of understanding, he believes that only by embracing a glorious evolution of technology..."
      },
      {
        "id": "vladimir",
        "key": "8",
        "name": "Vladimir",
        "title": "the Crimson Reaper",
        "tags": [
        "Mage",
        "Tank"
        ],
        "stats": {
        "hp": 537,
        "hpperlevel": 96,
        "mp": 2,
        "mpperlevel": 0,
        "movespeed": 330,
        "armor": 23,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 450,
        "hpregen": 7,
        "hpregenperlevel": 0.6,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 55,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Vladimir.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 336,
        "y": 0
        },
        "description": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily..."
      },
      {
        "id": "volibear",
        "key": "106",
        "name": "Volibear",
        "title": "the Thunder's Roar",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 584.48,
        "hpperlevel": 86,
        "mp": 270.4,
        "mpperlevel": 30,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 8,
        "hpregenperlevel": 0.65,
        "mpregen": 8.092,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 68,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": -0.05,
        "attackspeedperlevel": 2.67
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Volibear.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 384,
        "y": 0
        },
        "description": "The thunderous demigod known as the Thousand-Pierced Bear is the battle-spirit of the Freljord. Thousands of years of constant and bitter wars, fought in the coldest winters, have hardened Volibear into a truly indomitable force, hurling bolts of..."
      },
      {
        "id": "warwick",
        "key": "19",
        "name": "Warwick",
        "title": "the Uncaged Wrath of Zaun",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 280,
        "mpperlevel": 35,
        "movespeed": 335,
        "armor": 33,
        "armorperlevel": 3.2,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 4,
        "hpregenperlevel": 0.75,
        "mpregen": 7.466,
        "mpregenperlevel": 0.575,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 2.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Warwick.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 432,
        "y": 0
        },
        "description": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. Bursting out of the shadows, he preys upon..."
      },
      {
        "id": "xayah",
        "key": "498",
        "name": "Xayah",
        "title": "the Rebel",
        "tags": [
        "Marksman"
        ],
        "stats": {
        "hp": 561,
        "hpperlevel": 86,
        "mp": 340,
        "mpperlevel": 40,
        "movespeed": 325,
        "armor": 28,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 3.25,
        "hpregenperlevel": 0.75,
        "mpregen": 8.25,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 2.9,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.3
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Xayah.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 0,
        "y": 48
        },
        "description": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to..."
      },
      {
        "id": "xerath",
        "key": "101",
        "name": "Xerath",
        "title": "the Magus Ascendant",
        "tags": [
        "Mage",
        "Assassin"
        ],
        "stats": {
        "hp": 526,
        "hpperlevel": 92,
        "mp": 459,
        "mpperlevel": 22,
        "movespeed": 340,
        "armor": 21.88,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 525,
        "hpregen": 5.5,
        "hpregenperlevel": 0.55,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.7,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 1.36
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Xerath.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 48,
        "y": 48
        },
        "description": "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven..."
      },
      {
        "id": "xinzhao",
        "key": "5",
        "name": "Xin Zhao",
        "title": "the Seneschal of Demacia",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 570,
        "hpperlevel": 92,
        "mp": 273.8,
        "mpperlevel": 35,
        "movespeed": 345,
        "armor": 35,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.7,
        "mpregen": 7.256,
        "mpregenperlevel": 0.45,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 66,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 3.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/XinZhao.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 96,
        "y": 48
        },
        "description": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave..."
      },
      {
        "id": "yasuo",
        "key": "157",
        "name": "Yasuo",
        "title": "the Unforgiven",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 523,
        "hpperlevel": 87,
        "mp": 100,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 30,
        "armorperlevel": 3.4,
        "spellblock": 30,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 6.5,
        "hpregenperlevel": 0.9,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": -0.067,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Yasuo.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 144,
        "y": 48
        },
        "description": "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self..."
      },
      {
        "id": "yorick",
        "key": "83",
        "name": "Yorick",
        "title": "Shepherd of Souls",
        "tags": [
        "Fighter",
        "Tank"
        ],
        "stats": {
        "hp": 580,
        "hpperlevel": 100,
        "mp": 300,
        "mpperlevel": 40,
        "movespeed": 340,
        "armor": 39,
        "armorperlevel": 4,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.8,
        "mpregen": 7.5,
        "mpregenperlevel": 0.75,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 62,
        "attackdamageperlevel": 5,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Yorick.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 192,
        "y": 48
        },
        "description": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that he gathers to him. Yorick's monstrous..."
      },
      {
        "id": "zac",
        "key": "154",
        "name": "Zac",
        "title": "the Secret Weapon",
        "tags": [
        "Tank",
        "Fighter"
        ],
        "stats": {
        "hp": 615,
        "hpperlevel": 95,
        "mp": 0,
        "mpperlevel": 0,
        "movespeed": 340,
        "armor": 33,
        "armorperlevel": 3.5,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 175,
        "hpregen": 8,
        "hpregenperlevel": 0.5,
        "mpregen": 0,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 3.4,
        "attackspeedoffset": -0.02,
        "attackspeedperlevel": 1.6
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zac.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 240,
        "y": 48
        },
        "description": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally..."
      },
      {
        "id": "zed",
        "key": "238",
        "name": "Zed",
        "title": "the Master of Shadows",
        "tags": [
        "Assassin",
        "Fighter"
        ],
        "stats": {
        "hp": 584,
        "hpperlevel": 85,
        "mp": 200,
        "mpperlevel": 0,
        "movespeed": 345,
        "armor": 32,
        "armorperlevel": 3.5,
        "spellblock": 32.1,
        "spellblockperlevel": 1.25,
        "attackrange": 125,
        "hpregen": 7,
        "hpregenperlevel": 0.65,
        "mpregen": 50,
        "mpregenperlevel": 0,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 63,
        "attackdamageperlevel": 3.4,
        "attackspeedoffset": -0.04,
        "attackspeedperlevel": 2.1
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zed.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 288,
        "y": 48
        },
        "description": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's martial arts traditions to drive out Noxian invaders. During the war, desperation led him to unlock the..."
      },
      {
        "id": "ziggs",
        "key": "115",
        "name": "Ziggs",
        "title": "the Hexplosives Expert",
        "tags": [
        "Mage"
        ],
        "stats": {
        "hp": 536,
        "hpperlevel": 92,
        "mp": 480,
        "mpperlevel": 23.5,
        "movespeed": 325,
        "armor": 21.544,
        "armorperlevel": 3.3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 54.208,
        "attackdamageperlevel": 3.1,
        "attackspeedoffset": -0.0473,
        "attackspeedperlevel": 2
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Ziggs.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 336,
        "y": 48
        },
        "description": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town..."
      },
      {
        "id": "zilean",
        "key": "26",
        "name": "Zilean",
        "title": "the Chronokeeper",
        "tags": [
        "Support",
        "Mage"
        ],
        "stats": {
        "hp": 504,
        "hpperlevel": 82,
        "mp": 452,
        "mpperlevel": 30,
        "movespeed": 335,
        "armor": 24,
        "armorperlevel": 3.8,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 11.335,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 51.64,
        "attackdamageperlevel": 3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.13
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zilean.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 384,
        "y": 48
        },
        "description": "Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all..."
      },
      {
        "id": "zoe",
        "key": "142",
        "name": "Zoe",
        "title": "the Aspect of Twilight",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 560,
        "hpperlevel": 92,
        "mp": 425,
        "mpperlevel": 25,
        "movespeed": 340,
        "armor": 20.8,
        "armorperlevel": 3.5,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 550,
        "hpregen": 6.5,
        "hpregenperlevel": 0.6,
        "mpregen": 8,
        "mpregenperlevel": 0.65,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 58,
        "attackdamageperlevel": 3.3,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zoe.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 432,
        "y": 48
        },
        "description": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without..."
      },
      {
        "id": "zyra",
        "key": "143",
        "name": "Zyra",
        "title": "Rise of the Thorns",
        "tags": [
        "Mage",
        "Support"
        ],
        "stats": {
        "hp": 504,
        "hpperlevel": 79,
        "mp": 418,
        "mpperlevel": 25,
        "movespeed": 340,
        "armor": 29,
        "armorperlevel": 3,
        "spellblock": 30,
        "spellblockperlevel": 0.5,
        "attackrange": 575,
        "hpregen": 5.5,
        "hpregenperlevel": 0.5,
        "mpregen": 15.335,
        "mpregenperlevel": 0.4,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 53.376,
        "attackdamageperlevel": 3.2,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.11
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Zyra.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion4.png",
        "x": 0,
        "y": 96
        },
        "description": "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks..."
      }
      ];
    // this.getChampionList();
  }

  getChampionList(): void {
    this.championsListService.getChampionsList().subscribe(results => {
      this.champions = results;
    });
  }
}
