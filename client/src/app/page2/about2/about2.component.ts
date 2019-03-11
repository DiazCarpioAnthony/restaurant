import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css']
})
export class About2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready( () => {
      // Efecto Go-down
      const about: any = $('.about').offset().top;
      $('#btn-go-down').on('click', (e: any) => {
          e.preventDefault();
          console.log(about);
          $('html, body').animate({
              scrollTop: about - 100
          }, 300);
      });

    });
  }

}
