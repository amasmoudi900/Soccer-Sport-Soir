import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // matchUrl = 'api/matches';
  matchUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getAllMatches() {
    return this.httpClient.get<{message:string, matches:any}>(`${this.matchUrl}/allMatches`);
  }

  deleteMatch(id:string) {
    return this.httpClient.delete(`${this.matchUrl}/deleteMatch/${id}`);
  }

  addMatchService(match:any,image:File) {
    let formData = new FormData();
    formData.append('teamOne', match.teamOne);
    formData.append('teamTwo', match.teamTwo);
    formData.append('scoreOne', match.scoreOne);
    formData.append('scoreTwo', match.scoreTwo);
    formData.append('image', image);
    return this.httpClient.post(`${this.matchUrl}/addMatch`, formData);
  }

  editMatch(match:any) {
    return this.httpClient.put(`${this.matchUrl}/editMatch/${match._id}`, match);
  }

  getMatchById(id:string) {
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/displayMatch/${id}`);
  }

  searchMatch(term:any) {
    return this.httpClient.get<{searchedMatches:any}>(`${this.matchUrl}/api/search/${term}`)
  }
  
}
