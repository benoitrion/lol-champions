import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChampionsListComponent } from "../app/champions-list/champions-list.component"
import { ChampionDetailsComponent } from "../app/champion-details/champion-details.component"
import { PageNotFoundComponent } from "../app/page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: 'champions',
    component: ChampionsListComponent,
    data: { title: 'Champion List' }
  },
  { path: 'champions/:id', component: ChampionDetailsComponent },
  { path: '',
    redirectTo: '/champions',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
