import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;
  matches:any;
  constructor(
    private matchService:MatchService,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.getMatches();
    this.getUsers();
  }
  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    );
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log();
        
        this.users = data.users;
      }
    );
  }
  delete(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getMatches();
      }
    )
  }

  edit(id:any) {
    this.router.navigate([`edit-match/${id}`]);
  }

  display(id:any) {
    localStorage.setItem('idMatch', id);
    this.router.navigate([`display-match/${id}`]);
  }

  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      }
    )
  }


}
