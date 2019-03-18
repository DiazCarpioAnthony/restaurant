import { Component, OnInit } from '@angular/core';

import { PlatoService } from '../../services/plato.service';
import { BebidaService } from '../../services/bebida.service';

import { Plato } from '../../models/Plato';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-main2',
    templateUrl: './main2.component.html',
    styleUrls: ['./main2.component.css',
        '../../../assets/css/animate.css']
})

/* tslint:disable */
export class Main2Component implements OnInit {
    id:any;
    ruta:any;
    descripcion:string = "";
	// Platos
    platos: Plato = {};
    platoFound: any;
	// Bebidas
    bebidas: any = [];
    // Precio
    precio: string = "";
    
    constructor(private platoService: PlatoService,
                private bebidaService: BebidaService) { }

    ngOnInit() {
        $(document).ready(() => {
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
                });
            });


            // Efecto platillo
            $('.name-platillo').on('click', function (e: any) {
                e.preventDefault();
                // PONER EL SCROLL AL INICIO DEL MENU-AREA
                $('html, body').animate({
                    scrollTop: menuArea - 100
                }, 500);
                // OBTENER LA IMAGEN DEL FOR DEL LABEL 
                // console.log($(this).attr("for"));
                const $imagen = $(this).attr("for");
                $('#img-platillo').attr('src', $imagen);

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
            
            // EFECTO SPINER
            $('.spinner .btn:first-of-type').on('click', () => {
                $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
            });
            $('.spinner .btn:last-of-type').on('click', () => {
                $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
            });

        });
        
		// Platos Service
		this.platoService.getPlatos().subscribe(
			(res: Plato) => {
				this.platos = res;
				console.log(this.platos);
			},
			err => console.log(err)
        )
		// Bebidas Service
		this.bebidaService.getBebidas().subscribe(
			res => {
				this.bebidas = res;
				console.log(this.bebidas);
			},
			err => console.log(err)
        )
        
    }
    
    // Calcular Precio
    calcularPrecio(){
        let precioTotal=0;
        $('li input').each(function (index: any, elemento: any) {
            if($(this).val()){
                console.log("Valor " + $(this).val() + " - Precio "+ $(this).attr("id"));
                let valor =  $(this).val();
                let precio1 =  $(this).attr("id");
                precioTotal += parseFloat(precio1)*parseInt(valor);
                console.log(precioTotal);
            }
        });
        this.precio = precioTotal.toString();
        // alert(this.precio);
    }

    setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }
}
