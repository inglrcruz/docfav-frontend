/* import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { GameComponent } from './game.component';
import { GameService } from '../services/game/game.service';
import { ActivatedRoute } from '@angular/router';
import { GamesInterface } from '../interfaces/game';

describe('GameComponent', () => {
  let component: GameComponent;
  let gameService: GameService;
  let route: ActivatedRoute;

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
  
  const mockGame = {
    "id": 540,
    "title": "Overwatch 2",
    "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
    "status": "Live",
    "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
    "description": "The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.",
    "game_url": "https://www.freetogame.com/open/overwatch-2",
    "genre": "Shooter",
    "platform": "Windows",
    "publisher": "Activision Blizzard",
    "developer": "Blizzard Entertainment",
    "release_date": "2022-10-04",
    "freetogame_profile_url": "https://www.freetogame.com/overwatch-2",
    "minimum_system_requirements": {
      "os": "Windows 10 64-bit",
      "processor": "Intel Core i3 or AMD Phenom X3 8650",
      "memory": "6 GB",
      "graphics": "NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series",
      "storage": "50 GB"
    },
    "screenshots": [
      {
        "id": 1334,
        "image": "https://www.freetogame.com/g/540/overwatch-2-1.jpg"
      },
      {
        "id": 1335,
        "image": "https://www.freetogame.com/g/540/overwatch-2-2.jpg"
      },
      {
        "id": 1336,
        "image": "https://www.freetogame.com/g/540/overwatch-2-3.jpg"
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [HttpClientTestingModule],
      providers: [GameService, ActivatedRoute],
    }).compileComponents();

    component = TestBed.inject(GameComponent);
    gameService = TestBed.inject(GameService);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should fetch game by ID', () => {
    //const mockParams = { get: () => of({ id: 540 }) };
    //spyOn(route, 'paramMap').and.returnValue(of(mockParams));
    const mockParams = { get: () => of({ id: 540 as number }) };
    spyOn(gameService, 'getGameByID').and.returnValue(of(mockGame));

    component.ngOnInit();

    expect(component.game).toEqual(mockGame);
    expect(component.games).toEqual([]);
    expect(component.screenshot).toBe('');
  });

  it('should fetch games by category', () => {
    const mockCategory = 'Shooter';
    spyOn(gameService, 'getGamesByCategory').and.returnValue(of(mockGames));
    component.getGamesByCategory(mockCategory);
    expect(component.games).toEqual(mockGames);
  });
  
  
});
*/




import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GameService } from '../services/game/game.service';
import { GameComponent } from './game.component';
import { GamesInterface } from '../interfaces/game';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameServiceSpy: jasmine.SpyObj<GameService>;

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

  const mockGame = {
    "id": 540,
    "title": "Overwatch 2",
    "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
    "status": "Live",
    "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
    "description": "The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.",
    "game_url": "https://www.freetogame.com/open/overwatch-2",
    "genre": "Shooter",
    "platform": "Windows",
    "publisher": "Activision Blizzard",
    "developer": "Blizzard Entertainment",
    "release_date": "2022-10-04",
    "freetogame_profile_url": "https://www.freetogame.com/overwatch-2",
    "minimum_system_requirements": {
      "os": "Windows 10 64-bit",
      "processor": "Intel Core i3 or AMD Phenom X3 8650",
      "memory": "6 GB",
      "graphics": "NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series",
      "storage": "50 GB"
    },
    "screenshots": [
      {
        "id": 1334,
        "image": "https://www.freetogame.com/g/540/overwatch-2-1.jpg"
      },
      {
        "id": 1335,
        "image": "https://www.freetogame.com/g/540/overwatch-2-2.jpg"
      },
      {
        "id": 1336,
        "image": "https://www.freetogame.com/g/540/overwatch-2-3.jpg"
      }
    ]
  };

  beforeEach(() => {
    const activatedRouteMock = {
      paramMap: of({
        get: (param: string) => 540
      }),
    };

    gameServiceSpy = jasmine.createSpyObj('GameService', ['getGameByID', 'getGamesByCategory']);

    TestBed.configureTestingModule({
      declarations: [GameComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: GameService, useValue: gameServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch game and games on component initialization', () => {
    gameServiceSpy.getGameByID.and.returnValue(of(mockGame));
    gameServiceSpy.getGamesByCategory.and.returnValue(of(mockGames));

    fixture.detectChanges();

    expect(component.game).toEqual({ ...mockGame, description: mockGame.description?.replace(/\r?\n/g, '<br />') });
    expect(component.games).toEqual(mockGames);
  });

});
