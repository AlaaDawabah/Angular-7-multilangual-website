import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';
import { DirectionService } from './direction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lang;
  constructor(private direction: DirectionService, private translate: TranslateService ) { }
  // title = 'file';
  public textDir;
  public textAlign;
  ngOnInit() {
    this.direction.dirObs.subscribe((language) => {
      this.lang = language;
      this.translate.use(this.lang);
      if (this.lang === 'ar') {
        this.textDir = 'rtl';
        this.textAlign = 'text-md-right';
      } else {
        this.textDir = 'ltr';
        this.textAlign = 'text-md-left';
      }
    });

  }
}
