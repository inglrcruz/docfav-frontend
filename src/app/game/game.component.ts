import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game/game.service';
import { GameInterface } from '../interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  public game: GameInterface = {}

  constructor(private gameServ: GameService, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params.get('id'))
      this.gameServ.getGameByID(parseInt(params.get('id'))).subscribe({
        next: (resp: GameInterface) => {
          this.game = resp
        },
        error: (e: any) => {
          console.log(e)
        }
      })
    })
  }

}
