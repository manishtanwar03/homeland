import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;

  constructor(public authService:AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  logOut(){
    this.authService.logOut();
  }

}
