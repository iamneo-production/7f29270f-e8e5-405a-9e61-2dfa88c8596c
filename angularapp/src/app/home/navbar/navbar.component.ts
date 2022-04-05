import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username !: string
  constructor(private _uaservice: UserAuthService) { }

  ngOnInit(): void {
    this.username = this._uaservice.getUser()
  }

}
