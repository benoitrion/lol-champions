import { Component, Input, OnInit } from "@angular/core";
import { Champion } from "../model/champion";
import { ChampionsService } from "../services/champions.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-champions-list",
  templateUrl: "./champions-list.component.html",
  providers: [ChampionsService],
  styleUrls: ["./champions-list.component.scss"]
})
export class ChampionsListComponent implements OnInit {
  @Input() champions: Champion[];
  shownChampions = [];
  range = 5;

  constructor(
    private championsService: ChampionsService) {}

  ngOnInit() {
    this.getChampionList();
    this.loadMore();
  }

  loadMore() {
    this.shownChampions = this.shownChampions.concat(this.champions.slice(this.shownChampions.length, this.shownChampions.length + this.range))
  }

  getChampionList(): void {
    this.championsService.getChampionsList().subscribe(results => {
      this.champions = results;
    });
  }
}
