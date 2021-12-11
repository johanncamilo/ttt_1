import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: string[] = Array(9).fill(null)
  player:  string = 'X'
  winner:  any = null

  // * posibles combinaciones para ganar
  private lines: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  
  get status(): string {
    return this.winner ? `Winner: ${this.winner}` : `Player: ${this.player}`
  }

  constructor() { }

  ngOnInit(): void {
    console.log('matriz lines:');
    for (let line of this.lines) {
      console.log(line);
    }
  }

  makeAMove(place: number) {
    if(!this.winner && !this.squares[place]) {
        this.squares[place] = this.player

        if(this.winningMove()) { 
          this.winner = this.player 
          console.log(this.squares);
        }
        this.player = this.player === 'X' ? 'O' : 'X'
    }
  }

  winningMove(): boolean {
    
    for (let line of this.lines) {
      if(    this.squares[line[0]]
          && this.squares[line[0]] == this.squares[line[1]]
          && this.squares[line[1]] == this.squares[line[2]]
        ) { return true }
    }

    return false
  }

  newGame () {
    this.squares = Array(9).fill(null)
    this.player = 'X'
    this.winner = null
  }
}
