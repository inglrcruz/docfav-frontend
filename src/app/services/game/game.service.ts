import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GameInterface, GamesInterface } from '../../interfaces/game';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../../utilities/loading.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient, private router: Router,
    private loadingService: LoadingService
  ) {
    this.loadingService.loadingStatus(true)
  }

  /**
   * Fetches a list of all games from the API.
   *
   * @returns An Observable emitting an array of GameInterface objects
   */
  getGames(): Observable<GamesInterface[]> {
    return this.http.get<GamesInterface[]>(`${this.apiUrl}games`).pipe(
      finalize(() => {
        this.loadingService.loadingStatus(false)
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(`An error occurred: ${error}`))
      })
    )
  }

  /**
   * Fetches a specific game by its ID from the API.
   *
   * @param id The numerical ID of the game to fetch
   * @returns An Observable emitting a single GameInterface object
   */
  getGameByID(id: number): Observable<GameInterface> {
    return this.http.get<GameInterface>(`${this.apiUrl}game?id=${id}`).pipe(
      finalize(() => {
        this.loadingService.loadingStatus(false)
      }),
      catchError((error: HttpErrorResponse) => {
        this.router.navigate(['not-found'])
        return throwError(() => new Error(`An error occurred: ${error}`))
      })
    )
  }

  /**
   * Fetches a list of games filtered by a specified category from the API.
   *
   * @param category The category to filter games by
   * @returns An Observable emitting an array of GameInterface objects
   */
  getGamesByCategory(category: string): Observable<GamesInterface[]> {
    return this.http.get<GamesInterface[]>(`${this.apiUrl}games?category=${category}`);
  }

}