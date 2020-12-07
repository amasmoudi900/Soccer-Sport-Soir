import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl = 'api/players';
  constructor(private httpClient:HttpClient) { }

  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }
}
