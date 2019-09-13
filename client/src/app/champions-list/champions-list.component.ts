import { Component, Input, OnInit } from "@angular/core";
import { Champion } from "../model/champion";
import { ChampionsService } from "../services/champions.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-champions-list",
  templateUrl: "./champions-list.component.html",
  providers: [ChampionsService],
  styleUrls: ["./champions-list.component.scss"]
})
export class ChampionsListComponent implements OnInit {
  @Input() champions: Champion[];
  page = 1;
  size = 5;

  constructor(private championsService: ChampionsService) {}

  ngOnInit() {
    this.getChampionList(this.page, this.size);
  }

  loadMore() {
    this.getChampionList(this.page++, this.size);
  }

  getChampionList(pageNo, size): void {
    this.championsService.getChampionsList(pageNo, size).subscribe(
      result => {
        console.log(result);
        this.champions.concat(result);
      },
      error => console.log(error),
      () => {
        // No errors, route to new page
      }
    );
  }
}
