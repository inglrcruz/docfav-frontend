import { Component } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { GamesInterface } from '../interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public results: GamesInterface[] = []
  public filterItems: GamesInterface[] = []
  public frmSrh: any = { name: "", platform: "", genre: "" }

  constructor(private gameServ: GameService) {
    this.gameServ.getGames().subscribe({
      next: (resp: GamesInterface[]) => {
        this.filterItems = resp
        this.results = resp
      },
      error: (e: any) => {
        console.log(e)
      }
    })
  }

  searchGame() {

    // Store the original results once for efficiency
    const originalResults = this.results

    // Filter based on name, genre, and platform, combining conditions
    this.filterItems = originalResults.filter((i: GamesInterface) => {
      const searchName = this.frmSrh.name && this.frmSrh.name.toLowerCase()
      const searchGenre = this.frmSrh.genre && this.frmSrh.genre.toLowerCase()
      const searchPlatform = this.frmSrh.platform && this.frmSrh.platform.toLowerCase()

      return (
        (!searchName || i.title.toLowerCase().includes(searchName)) &&
        (!searchGenre || i.genre.toLowerCase().includes(searchGenre)) &&
        (!searchPlatform || i.platform.toLowerCase().includes(searchPlatform))
      )
    })

    // Log the final filtered count
    console.log("Filtered items: " + this.filterItems.length)


    //let list = this.results

    //if (this.frmSrh.name) {
    //  this.filterItems = this.results.filter((i: GamesInterface) => {
    //    return i.title.toLowerCase().includes(this.frmSrh.name.toLowerCase())
    //  })
    //  console.log("Name: " + this.filterItems.length)
    //}

    //if (this.frmSrh.genre !== "all") {
    //  this.filterItems = this.results.filter((i: GamesInterface) => {
    //    return i.genre.toLowerCase().includes(this.frmSrh.genre.toLowerCase())
    //  })
    //  console.log("Gendre: " + this.filterItems.length)
    //}

    //if (this.frmSrh.platform !== "all") {
    //  this.filterItems = this.results.filter((i: GamesInterface) => {
    //    return i.platform.toLowerCase().includes(this.frmSrh.platform.toLowerCase())
    //  })
    //  console.log("Platform: " + this.filterItems.length)
    //}

    //this.filterItems = list
  }

}
