import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = true;
  @Output() toggle = new EventEmitter<boolean>();
  constructor(private authServie: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void{
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }

  logout(): void{
    this.authServie.logout();
  }

}
