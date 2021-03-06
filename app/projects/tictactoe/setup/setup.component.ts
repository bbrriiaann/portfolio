import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { TicTacToeService, Player, TileType } from './../tictactoe.service';

@Component({
  moduleId: module.id,
  selector: 'my-setup',
  templateUrl: 'setup.component.html',
  styles: [require('./../../../../scss/projects/tictactoe/tictactoe-setup-end.scss').toString()],
  directives: [ROUTER_DIRECTIVES]
})

export class SetupComponent implements OnInit {
  private userOne: Player;
  private userTwo: Player;
  private userOneName: string;
  private userTwoName: string;
  private userOneTileType: TileType;
  private userTwoTileType: TileType;
  constructor(private router: Router, private ticTacToeService: TicTacToeService) {}

  ngOnInit() {
    this.userOne = this.ticTacToeService.getUserOne();
    this.userTwo = this.ticTacToeService.getUserTwo();
    this.userOneName = this.userOne.name;
    this.userTwoName = this.userTwo.name;
    this.userOneTileType = this.userOne.tileType;
    this.userTwoTileType = this.userTwo.tileType;
  }

  toggleTile() {
    this.ticTacToeService.toggleTile();
    this.updateUserOne(true);
    this.updateUserTwo(true);
  }

  updateUserOne(withoutUserSettings?: boolean) {
    if (withoutUserSettings == null) { this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType); }
    this.userOne = this.ticTacToeService.getUserOne();
    this.userOneName = this.userOne.name;
    this.userOneTileType = this.userOne.tileType;
  }

  updateUserTwo(withoutUserSettings?: boolean) {
    if (withoutUserSettings == null) { this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType); }
    this.userTwo = this.ticTacToeService.getUserTwo();
    this.userTwoName = this.userTwo.name;
    this.userTwoTileType = this.userTwo.tileType;
  }

  gameStart() {
    this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
    this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType);
    this.router.navigate(['/tictactoe', '/board']);
    event.preventDefault();
    event.stopPropagation();
  }
}
