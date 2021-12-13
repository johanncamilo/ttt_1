import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: string[] = Array(9).fill(null)
  player:  string = 'Jugador1'
  symbol:  string = 'X'
  winner:  any = null

  // * posibles combinaciones para ganar
  private lines: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  
  
  constructor() { }

  ngOnInit(): void {
    console.log('matriz lines:');
    for (let line of this.lines) {
      console.log(line);
    }
  }

  /**
   * función hace el movimiento: recibe la coordenada como parametro, luego de hacer validaciones
   * escribe dentro del array squares y los cambios se ven reflejados inmediatamente en la vista
   * siempre llama a mionningMove() para validar si hay ganador
   * @param place valor que indica el valor en el array a modificar
   */
  makeAMove(place: number) {
    if(!this.winner && !this.squares[place]) {
        this.squares[place] = this.symbol

        if(this.winningMove()) { 
          this.winner = this.player
          console.log(this.squares);
        }
        this.symbol = this.symbol === 'X' ? 'O' : 'X'
        this.player = this.player === 'Jugador1' ? 'Jugador2' : 'Jugador1'
    }
  }

  /**
   * 
   * @returns boolean: valida si hay ganador o no iterando las posibles combinaciones
   */
  winningMove(): boolean {
    
    for (let line of this.lines) {
      if(    this.squares[line[0]]
          && this.squares[line[0]] == this.squares[line[1]]
          && this.squares[line[1]] == this.squares[line[2]]
        ) { return true }
    }

    return false
  }

  /**
   * Setea de nuevo las propiedades con sus valores default
   */
  newGame (event: any) {
    // console.log(event.symbol);
    
    this.squares = Array(9).fill(null)
    this.symbol = event.symbol
    this.player = event.symbol == 'X' ? 'Jugador1' : 'Jugador2'
    this.winner = null
  }

  join () {
    console.log('te has unido a una nueva partida');
  }
}
