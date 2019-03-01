import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css',
              '../../../book2.css']
})

/* tslint:disable */
export class Main1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  $(document).ready( () => {

    $(window).scroll( () => {
      const windowWidth = $(window).width();
      if( windowWidth > 800 ) {
        const scroll = $(window).scrollTop();

        $('header .textos').css({
          transform: 'translate(0px,' + scroll / 2 + '%)'
        });

        $('.acerca-de article').css({
          transform: 'translate(0px, -' + scroll / 4 + '%)'
        });
      }
    });

    $(window).resize( () => {
      const windowWidth = $(window).width();
      if(windowWidth < 800) {
        $('.acerca-de article').css({
          transform: 'translate(0px, 0px)'
        });
      }
    });

    // Efecto Menu
    $('.menu a').each(function(index: any , elemento: any){
      $(this).css({
        top: '-200px'
    });

      $(this).animate({
        top: '0'
      }, 2000 + (index * 500));
    });

    // Efecto Header
    if ( $(window).width() > 800 ) {
      $('header .textos').css({
        opacity: 0,
        marginTop: 0
		});
		
		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}

// Scroll Elementos Menu
	   var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	   $('#btn-acerca-de').on('click', function(e: any) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		}, 500);
	});

	   $('#btn-menu').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	   $('#btn-galeria').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	   $('#btn-ubicacion').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});

	// Efecto about
	   document.getElementById('about').addEventListener('click', function(e) {
		// alert("Platillo 1");
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1000);

		// FUNCION PARA EFECTO BLUR
		$({blurRadius: 0}).animate({blurRadius: 10}, {
			easing: 'linear',
			step() {
				$('body').css({
					'-webkit-filter': 'blur(' + this.blurRadius + 'px)',
					filter: 'blur(' + this.blurRadius + 'px)'
				});
			}
		}, 1000);

		// CAMBIO DE PAGINA SPA
		setTimeout(function() {

			$({blurRadius: 10}).animate({blurRadius: 0}, {
				easing: 'linear',
				step() {
					$('body').css({
						'-webkit-filter': 'blur(' + this.blurRadius + 'px)',
						filter: 'blur(' + this.blurRadius + 'px)'
					});
				}
			}, 2000);


		 location.href = './index2.html';
		}, 1500);
	});

	// Efectos platillos
	   document.getElementById('platillo-1').addEventListener('click', function(e) {
		// alert("Platillo 1");
		window.open('http://www.google.com', '_blank');
		// QUE ABRA LA PAGINA AUXILIAR PERO DE ESE PLATO Y QUE SE PUEDA REGRESAR A LA PAGINA PRINCIPAL O
		// ARMA TU PLATO
	});

	// Efecto galeria
	   document.getElementById('foto-1').addEventListener('click', function(e) {
		// alert("Platillo 1");
		window.open('http://www.google.com', '_blank');
	});

  });
  }


}
