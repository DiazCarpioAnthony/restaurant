import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plato } from '../models/Plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  API_URI2 = 'https://resturant-serve.herokuapp.com/api/plato';
  API_URI = 'http://localhost:3000/api/plato';

  constructor(private http: HttpClient) { }

  getPlatos() {
    return this.http.get(`${this.API_URI}/`);
  }
  getPlatoOne(idPlato: string) {
    return this.http.get(`${this.API_URI}/${idPlato}`);
  }
  deletePlato(idPlato: string) {
    return this.http.delete(`${this.API_URI}/${idPlato}`);
  }
  savePlato(platoNew: Plato) {
    return this.http.post(`${this.API_URI}/`, platoNew);
  }
  updatePlato(idPlato: string, updatedPlato: Plato) {
    return this.http.put(`${this.API_URI}/${idPlato}`, updatedPlato);
  }

}
