import { Component, OnInit } from '@angular/core';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-comments2',
  templateUrl: './comments2.component.html',
  styleUrls: ['./comments2.component.css']
})
export class Comments2Component implements OnInit {

  constructor() { 
  }

  ngOnInit() {/* CREAR UN OBJETO QUE CONVERSE UN VALOR */
    
    $(document).ready( () => {
      // Efecto Go-down
      const comentarios: any = $('.comentarios').offset().top;
      $('#btn-go-down').on('click', (e: any) => {
          e.preventDefault();
          console.log(comentarios);
          $('html, body').animate({
              scrollTop: comentarios - 100
          }, 300);
          
      });
    });
    
  }

}
