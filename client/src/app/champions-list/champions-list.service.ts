import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Champion } from "./champion";

@Injectable({
  providedIn: "root"
})
export class ChampionsListService {
  private championsUrl = "api/champions";

  constructor(private http: HttpClient) {}

  getChampionsList(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championsUrl).pipe(
      tap(result => this.log(JSON.stringify(result))),
      catchError(this.handleError<Champion[]>("getChampionsList", []))
    );
  }

  private log(message: string) {
    console.log(`ChampionsListService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: use logger
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
