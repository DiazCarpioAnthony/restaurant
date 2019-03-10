import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(() => {

      // Efecto Menu
      $('.menu a').each(function (index: any, elemento: any) {
        $(this).css({
          top: '-200px'
        });

        $(this).animate({
          top: '0'
        }, 2000 + (index * 500));
      });
      // btn-armaTuPedido
      document.getElementById('btn-armaTuPedido').addEventListener('click', function (e) {
        // alert("Platillo 1");
        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, 1000);

        // CAMBIO DE PAGINA SPA
        $({ opacityRadius: 0 }).animate({ opacityRadius: 1 }, {
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
