import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { GamesInterface } from '../interfaces/game';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public limit: number = 0
  public genres: any = environment.genres
  public results: GamesInterface[] = []
  public filterItems: GamesInterface[] = []
  public frmSrh: any = { name: "", platform: "", genre: "" }

  constructor(private gameServ: GameService) { }

  ngOnInit(): void {
    this.gameServ.getGames().subscribe({
      next: (resp: GamesInterface[]) => {
        this.results = resp
        this.loadMore()
      },
      error: (e: any) => {
        console.log(e)
      }
    })
  }

  /**
   * Filters the games based on the search criteria (name, genre, platform).
   */
  searchGame() {
    const results = this.results.filter((i: GamesInterface) => {
      const searchName = this.frmSrh.name && this.frmSrh.name.toLowerCase()
      const searchGenre = this.frmSrh.genre && this.frmSrh.genre.toLowerCase()
      const searchPlatform = this.frmSrh.platform && this.frmSrh.platform.toLowerCase()
      return (
        (!searchName || i.title.toLowerCase().includes(searchName)) &&
        (!searchGenre || i.genre.toLowerCase().includes(searchGenre)) &&
        (!searchPlatform || i.platform.toLowerCase().includes(searchPlatform))
      )
    })
    this.limit = 0
    this.loadMore(results)
  }

  /**
   * Increases the limit of displayed games and updates the filtered list accordingly.
   */
  loadMore(results: GamesInterface[] = []) {
    this.limit = this.limit + 52
    this.filterItems = (!results.length) ? this.results.slice(0, this.limit) : results.slice(0, this.limit)
  }

}
