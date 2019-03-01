import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.component.html',
  styleUrls: ['./navigation2.component.css']
})
export class Navigation2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( () => {

      // Efecto Go-down
      const menuArea: any = $('.menu-list').offset().top;
      $('#armaTuPedido').on('click', (e: any) => {
          e.preventDefault();
          console.log(menuArea);
          $('html, body').animate({
              scrollTop: menuArea - 100
          }, 500);
      });

    });
  }

}
