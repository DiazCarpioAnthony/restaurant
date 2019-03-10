import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( () => {
      // Efecto Go-down
      const menuArea: any = $('.menu-list').offset().top;
      $('#btn-go-down').on('click', (e: any) => {
          e.preventDefault();
          console.log(menuArea);
          $('html, body').animate({
              scrollTop: menuArea - 100
          }, 500);
      });
  });

  }

}
