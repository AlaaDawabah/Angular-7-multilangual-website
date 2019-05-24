import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../direction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private direction: DirectionService) { }

  ngOnInit() {
  }
setLang(lang) {
  console.log(lang);
  this.direction.updateDirection(lang);
}
}
