import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  players: Observable<any[]>;
  constructor(private _firestore: AngularFirestore) {
    this.players = _firestore.collection('players').valueChanges()
  }
}
