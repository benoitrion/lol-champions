import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { Champion } from "../model/champion";

@Injectable({
  providedIn: "root"
})
export class ChampionsService {
  private championsUrl = "api/champions";

  constructor(private http: HttpClient) {}

  getChampionsList(pageNo, size): Observable<Champion[]> {
    const params = new HttpParams().set("pageNo", pageNo).set("size", size);
    return this.http.get<Champion[]>(this.championsUrl, { params }).pipe(
      tap(result => this.log(JSON.stringify(result))),
      catchError(this.handleError<Champion[]>("getChampionsList", []))
    );
  }

  getChampion(id): Observable<Champion> {
    return this.http.get<Champion>(this.championsUrl + "/" + id).pipe(
      tap(result => this.log(JSON.stringify(result))),
      catchError(this.handleError<Champion>("getChampion", null))
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
