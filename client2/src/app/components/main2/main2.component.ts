import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( () => {

      // Efecto Precio
      $('#btn-precio').on('click', (e: any) => {
          e.preventDefault();
          $('.precio').css({
              display: 'block'
          });
          $('.precio').addClass('animated  fadeIn');
          $('.down-precio').css({
              'animation-duration': '5s'
          });
      });
      // Efecto Go-down
      const menuArea: any = $('.menu-list').offset().top;
      $('#btn-go-down').on('click', (e: any) => {
          e.preventDefault();
          console.log(menuArea);
          $('html, body').animate({
              scrollTop: menuArea - 100
          }, 500);
      });


      // Efecto platillo
      $('.name-platillo').on('click', function(e: any) {
          e.preventDefault();
          // PONER EL SCROLL AL INICIO DEL MENU-AREA
          $('html, body').animate({
              scrollTop: menuArea - 100
          }, 500);
          // OBTENER EL ID DEL CHECBOX
          // console.log($(this).attr("for"));
          const $id = $(this).attr('for');
          $('#img-platillo').attr('src', '../../../assets/img/' + $id + '.jpg');

          // LIMPIAR LAS CLASES
          $('#img-platillo').removeClass('animated flip');
          $('#descripcion-platillo').removeClass('animated bounceInLeft');
          // RESPONSIVE
          if ($(window).width() < 991) {
              $('#img-platillo').css({
                  display: 'none',
                  'animation-duration': '1s',
                  width: '50%',
                  height: '250px'
              });
          } else {
              $('#img-platillo').css({
                  display: 'none',
                  'animation-duration': '1s',
                  width: '50%',
                  height: '450px'
              });
          }

          // AGREGAR LAS CLASES
          $('#img-platillo').addClass('animated flip');
          // RESPONSIVE
          if ($(window).width() < 991) {
              $('#img-platillo').css({
                  display: 'block',
                  'animation-duration': '1s',
                  width: '50%',
                  height: '250px'
              });
          } else {
              $('#img-platillo').css({
                  display: 'block',
                  'animation-duration': '1s',
                  width: '50%',
                  height: '450px'
              });
          }
          setTimeout(
              () => {
                  $('#descripcion-platillo').addClass('animated bounceInLeft');
                  $('#descripcion-platillo').css({
                      display: 'block',
                      'animation-duration': '1s'
                  });
              }, 400);

      });
      // CONOCER SI ESTAN CHECKED
      $('#btn-precio').on('click', (e: any) => {
          e.preventDefault();
          $('li input').each(function(index: any, elemento: any) {
              if ($(this).prop('checked')) {
                  console.log('Seleccionado ' + index);
              }
          });
      })
      // EFECTO SPINER
      $('.spinner .btn:first-of-type').on('click', () => {
          $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
      });
      $('.spinner .btn:last-of-type').on('click', () => {
          $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
      });

  });
  }

}
