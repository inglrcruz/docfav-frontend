import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GameInterface, GamesInterface } from '../../interfaces/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGames(): Observable<GamesInterface[]> {
    return this.http.get<GamesInterface[]>(`${this.apiUrl}games`);
  }

  getGameByID(id: number): Observable<GameInterface> {
    return this.http.get<GameInterface>(`${this.apiUrl}game?id=${id}`);
  }

}