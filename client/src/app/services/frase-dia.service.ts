import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FraseDia } from '../models/FraseDia';

@Injectable({
  providedIn: 'root'
})
export class FraseDiaService {

  API_URI = 'https://resturant-serve.herokuapp.com/api/frase';
  API_URI2 = 'http://localhost:3000/api/frase';
  private idFraseDelDia: string;

  constructor(private http: HttpClient) { }

  getFrases() {
    return this.http.get(`${this.API_URI}/`);
  }
  getCount() {
    return this.http.get(`${this.API_URI}/count`);
  }
  getFraseDelDia(idFrase: string) {
    return this.http.get(`${this.API_URI}/${idFrase}`);
  }
  deleteFrase(idFrase: string) {
    return this.http.delete(`${this.API_URI}/${idFrase}`);
  }
  saveFrase(fraseNew: FraseDia) {
    return this.http.post(`${this.API_URI}/`, fraseNew);
  }
  updateFrase(idFrase: string, updatedFrase: FraseDia) {
    return this.http.put(`${this.API_URI}/${idFrase}`, updatedFrase);
  }

}
