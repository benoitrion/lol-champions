import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Champion } from "../model/champion";
import { ChampionsService } from "../services/champions.service";

@Component({
  selector: "app-champion-details",
  templateUrl: "./champion-details.component.html",
  providers: [ChampionsService],
  styleUrls: ["./champion-details.component.scss"]
})
export class ChampionDetailsComponent implements OnInit {
  @Input() champion: Champion;

  constructor(private championsService: ChampionsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.championsService.getChampion(id).subscribe(champion => (this.champion = champion));
      }
    });
    console.log(this.champion);
  }

  formatStats(stat, levelStat) {
    return `${stat} (+${levelStat} par niveau)`;
  }
  goBack(): void {
    window.history.back();
  }

}
