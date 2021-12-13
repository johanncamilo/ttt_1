import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PartidaService } from './partida.service';


@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  idPartida: number = Math.floor(Math.random() * 1111);
  unirse: boolean = false

  @Input() player!:  string
  @Input() symbol!:  string
  @Input() winner!:  any

  @Output() onNewGame = new EventEmitter()
  
  players = this._partidaService.players
  p1!: string
  p2!: string

  get status(): string {
    return this.winner ? `Ganador: ${this.winner}` : `Turno de: ${this.player}`
  }

  constructor(private _partidaService: PartidaService) { }

  ngOnInit(): void {
    this.players.subscribe(value => {
      console.log(value);
      this.p1 = value[0].name
      this.p2 = value[1].name
    })
  }

  nuGame (event: any) {
    this.onNewGame.emit({
      symbol: this.symbol
    })
  }

  join () {
    this.unirse = !this.unirse
  }

}
