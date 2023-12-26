// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HomeComponent } from './home.component';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// 
// describe('HomeComponent', () => {
// 
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;
// 
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HomeComponent],
//       imports: [HttpClientTestingModule]
//     })
//       .compileComponents();
// 
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
// 
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// 
// });


import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GameService } from '../services/game/game.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { GamesInterface } from '../interfaces/game';
import { FormsModule } from '@angular/forms';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let gameService: GameService;

  const mockGames: GamesInterface[] = [{
    "id": 540,
    "title": "Overwatch 2",
    "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
    "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
    "game_url": "https://www.freetogame.com/open/overwatch-2",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Activision Blizzard",
    "developer": "Blizzard Entertainment",
    "release_date": "2022-10-04",
    "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
  }, {
    "id": 516,
    "title": "PUBG: BATTLEGROUNDS",
    "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
    "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    "game_url": "https://www.freetogame.com/open/pubg",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "KRAFTON, Inc.",
    "developer": "KRAFTON, Inc.",
    "release_date": "2022-01-12",
    "freetogame_profile_url": "https://www.freetogame.com/pubg"
  }, {
    "id": 508,
    "title": "Enlisted",
    "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
    "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    "game_url": "https://www.freetogame.com/open/enlisted",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Gaijin Entertainment",
    "developer": "Darkflow Software",
    "release_date": "2021-04-08",
    "freetogame_profile_url": "https://www.freetogame.com/enlisted"
  }, {
    "id": 380,
    "title": "Dark Orbit Reloaded",
    "thumbnail": "https://www.freetogame.com/g/380/thumbnail.jpg",
    "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
    "game_url": "https://www.freetogame.com/open/darkorbit",
    "genre": "Shooter",
    "platform": "Web Browser",
    "publisher": "Bigpoint",
    "developer": "Bigpoint",
    "release_date": "2006-12-11",
    "freetogame_profile_url": "https://www.freetogame.com/darkorbit"
  }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [GameService],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();

    component = TestBed.createComponent(HomeComponent).componentInstance;
    gameService = TestBed.inject(GameService);
  });

  it('should fetch games on initialization', () => {
    spyOn(gameService, 'getGames').and.returnValue(of(mockGames));
    component.ngOnInit();
    expect(gameService.getGames).toHaveBeenCalled();
    expect(component.results).toEqual(mockGames);
  });

  it('should filter games by name, genre, and platform', () => {
    component.results = mockGames;
    component.frmSrh = { name: 'Overwatch', genre: 'Shooter', platform: 'PC (Windows)' };
    component.searchGame();
    expect(component.filterItems).toEqual([{
      "id": 540,
      "title": "Overwatch 2",
      "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
      "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
      "game_url": "https://www.freetogame.com/open/overwatch-2",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Activision Blizzard",
      "developer": "Blizzard Entertainment",
      "release_date": "2022-10-04",
      "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    }]);
  });

});
