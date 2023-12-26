import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game/game.service';
import { GameInterface, GamesInterface } from '../interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  public game: GameInterface = {}
  public games: GamesInterface[] = []
  public screenshot: string = ""

  constructor(
    private gameServ: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.getGameByID(parseInt(params.get('id')))
    })
  }

  /**
   * Fetches a specific game by its ID from the game service.
   *
   * @param id The numerical ID of the game to fetch
   */
  getGameByID(id: number) {
    this.gameServ.getGameByID(id).subscribe({
      next: (resp: GameInterface) => {
        this.game = { ...resp, description: resp.description?.toString().replace(/\r?\n/g, "<br />") }
        this.getGamesByCategory(resp.genre)
      }
    })
  }

  /**
   * Fetches a list of games filtered by a specified category from the game service.
   *
   * @param category The category to filter games by
   */
  getGamesByCategory(category: any) {
    this.gameServ.getGamesByCategory(category).subscribe({
      next: (resp: GamesInterface[]) => {
        this.games = (resp.length > 5) ? resp.sort(() => Math.random() - Math.random()).slice(0, 5) : resp
      }
    })
  }

  /**
   * Updates the screenshot property with the provided image URL.
   *
   * @param img The URL of the screenshot image to display
   */
  showScreenshot(img: string) {
    this.screenshot = img
  }

}