import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { GameInterface, GamesInterface } from '../../interfaces/game';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Game Service', () => {

  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(GameService);
    httpMock = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get all games', () => {
    const mockGames: GamesInterface[] = [
      {
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
        "id": 521,
        "title": "Diablo Immortal",
        "thumbnail": "https://www.freetogame.com/g/521/thumbnail.jpg",
        "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
        "game_url": "https://www.freetogame.com/open/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "publisher": "Blizzard Entertainment",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-06-02",
        "freetogame_profile_url": "https://www.freetogame.com/diablo-immortal"
      }
    ];
    service.getGames().subscribe(games => expect(games).toEqual(mockGames));

    const req = httpMock.expectOne(`${environment.apiUrl}games`);
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should get a game by ID', () => {
    const mockGame: GameInterface = {
      "id": 452,
      "title": "Call Of Duty: Warzone",
      "thumbnail": "https://www.freetogame.com/g/452/thumbnail.jpg",
      "status": "Live",
      "short_description": "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
      "description": "Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.",
      "game_url": "https://www.freetogame.com/open/call-of-duty-warzone",
      "genre": "Shooter",
      "platform": "Windows",
      "publisher": "Activision",
      "developer": "Infinity Ward",
      "release_date": "2020-03-10",
      "freetogame_profile_url": "https://www.freetogame.com/call-of-duty-warzone",
      "minimum_system_requirements": {
        "os": "Windows 7 64-Bit (SP1) or Windows 10 64-Bit",
        "processor": "Intel Core i3-4340 or AMD FX-6300",
        "memory": "8GB RAM",
        "graphics": "NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950",
        "storage": "175GB HD space"
      },
      "screenshots": [
        {
          "id": 1124,
          "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg"
        },
        {
          "id": 1125,
          "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg"
        },
        {
          "id": 1126,
          "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg"
        },
        {
          "id": 1127,
          "image": "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg"
        }
      ]
    };

    const id = 452;
    service.getGameByID(id).subscribe(game => expect(game).toEqual(mockGame));

    const req = httpMock.expectOne(`${environment.apiUrl}game?id=${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockGame);
  });

  it('should get games by category', () => {
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
    },
    {
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
    }];
    const category = 'shooter';
    service.getGamesByCategory(category).subscribe(games => expect(games).toEqual(mockGames));
  
    const req = httpMock.expectOne(`${environment.apiUrl}games?category=${category}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });


})
