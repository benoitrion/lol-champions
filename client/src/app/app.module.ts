import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChampionsListComponent } from "./champions-list/champions-list.component";
import { ChampionDetailsComponent } from "./champion-details/champion-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { ChampionsService } from "./services/champions.service";

@NgModule({
  declarations: [AppComponent, ChampionsListComponent, ChampionDetailsComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChampionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
