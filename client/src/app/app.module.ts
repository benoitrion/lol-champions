import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChampionsListComponent } from "./champions-list/champions-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ChampionsListService } from "./champions-list/champions-list.service";

@NgModule({
  declarations: [AppComponent, ChampionsListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChampionsListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
