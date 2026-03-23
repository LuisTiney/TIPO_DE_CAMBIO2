import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  // Nueva API que incluye el Quetzal guatemalteco (GTQ)
  private urlApi = 'https://open.er-api.com/v6/latest/USD';

  constructor(private http: HttpClient) {}

  // Función que consulta la API y devuelve los datos
  obtenerTipoCambio(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

}