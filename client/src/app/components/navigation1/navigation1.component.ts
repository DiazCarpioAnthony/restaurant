import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-navigation1',
  templateUrl: './navigation1.component.html',
  styleUrls: ['./navigation1.component.css']
})
/* tslint:disable */
export class Navigation1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( () => {
      document.getElementById('btn-armaTuPedido').addEventListener('click', function(e: any) {
        // alert("Platillo 1");
          e.preventDefault();
  
          // CAMBIO DE PAGINA SPA
          $({opacityRadius: 0}).animate({opacityRadius: 1}, {
            easing: 'linear',
            step() {
              $('body').css({
                opacity: this.opacityRadius 
              });
            }
          }, 1000);
          
  
        });
    });
    
  }

}
