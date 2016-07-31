import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService, Player, TileType } from './tictactoe.service';

@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    styles: [require('./../../../scss/projects/tictactoe.scss').toString()],
    template: `
    <div class="tictactoe-wrapper">
        <div class="tictactoe fade">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TicTacToeService]

})

export class TicTacToeComponent {
    constructor(private router: Router) { }
}
