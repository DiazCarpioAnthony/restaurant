import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bebida } from '../models/Bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  API_URI = 'https://resturant-serve.herokuapp.com/api/bebida';
  API_URI2 = 'http://localhost:3000/api/bebida';

  constructor(private http: HttpClient) { }

  getBebidas() {
    return this.http.get(`${this.API_URI}/`);
  }
  getBebidaOne(idBebida: string) {
    return this.http.get(`${this.API_URI}/${idBebida}`);
  }
  deleteBebida(idBebida: string) {
    return this.http.delete(`${this.API_URI}/${idBebida}`);
  }
  saveBebida(bebidaNew: Bebida) {
    return this.http.post(`${this.API_URI}/`, bebidaNew);
  }
  updateBebida(idBebida: string, updatedBebida: Bebida) {
    return this.http.put(`${this.API_URI}/${idBebida}`, updatedBebida);
  }

}
