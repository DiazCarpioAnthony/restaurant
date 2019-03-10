import { Component, OnInit } from '@angular/core';

import { FraseDiaService } from '../../services/frase-dia.service';
import { FraseDia } from '../../models/FraseDia';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-main1',
	templateUrl: './main1.component.html',
	styleUrls: ['./main1.component.css',
		'../../../assets/css/book2.css']
})


/* tslint:disable */
export class Main1Component implements OnInit {

	private seed: number = 0;
	fraseDia: any;
	countRes: any;
	size: number;
	description: string;
	autor: string;

	constructor(private fraseDiaService: FraseDiaService) {
		this.setSeed(this.seed);
	}

	ngOnInit() {
		//jQuery para animaciones
		$(document).ready(() => {

			$(window).scroll(() => {
				const windowWidth = $(window).width();
				if (windowWidth > 800) {
					const scroll = $(window).scrollTop();

					$('header .textos').css({
						transform: 'translate(0px,' + scroll / 2 + '%)'
					});

					$('.acerca-de article').css({
						transform: 'translate(0px, -' + scroll / 4 + '%)'
					});
				}
			});

			$(window).resize(() => {
				const windowWidth = $(window).width();
				if (windowWidth < 800) {
					$('.acerca-de article').css({
						transform: 'translate(0px, 0px)'
					});
				}
			});

			// Efecto Header
			if ($(window).width() > 800) {
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

			$('#btn-acerca-de').on('click', function (e: any) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: acercaDe - 100
				}, 500);
			});

			$('#btn-menu').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: menu
				}, 500);
			});

			$('#btn-galeria').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: galeria
				}, 500);
			});

			$('#btn-ubicacion').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: ubicacion - 100
				}, 500);
			});

			// Efecto about
			document.getElementById('about').addEventListener('click', function (e) {
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
			//btn-pedidoBook
			document.getElementById('btn-pedidoBook').addEventListener('click', function (e) {
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
			//btn-intentalo
			document.getElementById('btn-intentalo').addEventListener('click', function (e) {
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
			

			// Efectos platillos
			document.getElementById('platillo-1').addEventListener('click', function (e) {
				// alert("Platillo 1");
				window.open('http://www.google.com', '_blank');
				// QUE ABRA LA PAGINA AUXILIAR PERO DE ESE PLATO Y QUE SE PUEDA REGRESAR A LA PAGINA PRINCIPAL O
				// ARMA TU PLATO
			});

			// Efecto galeria
			document.getElementById('foto-1').addEventListener('click', function (e) {
				// alert("Platillo 1");
				window.open('http://www.google.com', '_blank');
			});

		});

		//Frase Dia Service
		this.fraseDiaService.getCount().subscribe(
			res => {
				this.countRes = res;
				this.size = this.countRes[0]['CANTIDAD'];
			},
			err => console.log(err)
		)
		this.fraseDiaService.getFraseDelDia(this.generarNumeroAleatorioPorFecha(0, 10)).subscribe(
			res => {
				this.fraseDia = res;

				this.description = this.fraseDia[0]['descripcion'];
				this.autor = this.fraseDia[0]['autor'];
			},
			err => console.log(err)
		)
	}

	//Get Seed from the current date
	setSeed(seed: number): void {
		let hoy = new Date();
		let dd = hoy.getDate();
		let mm = hoy.getMonth() + 1;
		let yyyy = hoy.getFullYear();

		this.seed = dd + mm + yyyy;
	}
	//With Seed
	generarNumeroAleatorioPorFecha(min: number, max: number): string {

		let seedAux: number = this.seed;
		min = min || 0;
		max = max || 1;
		var rand;
		if (typeof seedAux === "number") {
			seedAux = (seedAux * 93 + 492) % 233;
			var rnd = seedAux / 233;
			var disp = Math.abs(Math.sin(seedAux));
			rnd = (rnd + disp) - Math.floor((rnd + disp));
			rand = Math.floor(min + rnd * (max - min + 1));
		} else {
			rand = Math.floor(Math.random() * (max - min + 1)) + min;
		}
		return rand.toString();
	}

}
