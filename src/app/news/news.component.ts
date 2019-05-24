import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function Slider(element) {
      this.el = document.querySelector(element);
      this.init();
    }

    Slider.prototype = {
      init() {
        this.links = this.el.querySelectorAll('#slider-nav-a');
        this.wrapper = this.el.querySelector('#slider-wrapper');
        this.navigate();
      },
      navigate() {

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.links.length; ++i) {
          const link = this.links[i];
          this.slide(link);
        }
      },

      slide(element) {
        const self = this;
        element.addEventListener('click', function(e) {
          e.preventDefault();
          const a = this;
          self.setCurrentLink(a);
          const index = parseInt(a.getAttribute('data-slide'), 10) + 1;
          const currentSlide = self.el.querySelector('.slide:nth-child(' + index + ')');

          self.wrapper.style.left = '-' + currentSlide.offsetLeft + 'px';

        }, false);
      },
      setCurrentLink(link) {
        const parent = link.parentNode;
        const a = parent.querySelectorAll('a');

        link.className = 'current';

        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < a.length; ++j) {
          const cur = a[j];
          if (cur !== link) {
            cur.className = '';
          }
        }
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      const aSlider = new Slider('#slider');

    });


  }

}
