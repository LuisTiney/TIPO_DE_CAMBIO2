import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCambioService } from '../../services/tipo-cambio.service';

@Component({
  selector: 'app-tipo-cambio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  // Variable que guarda el valor del quetzal por 1 dólar
  valorQuetzal: number | null = null;

  // Variable que guarda cuándo se consultó por última vez
  horaDeActualizacion: string | null = null;

  // Variable que indica si está cargando (true = sí, false = no)
  estaCargando: boolean = false;

  // Variable que guarda el mensaje de error si algo falla
  mensajeDeError: string | null = null;

  constructor(private servicioCambio: TipoCambioService) {}

  // Se ejecuta automáticamente al cargar el componente
  ngOnInit(): void {
    this.consultarAPI();
  }

  // Función principal que consulta la API
  consultarAPI(): void {
    this.estaCargando = true;   // Mostrar spinner
    this.mensajeDeError = null; // Limpiar error anterior

    this.servicioCambio.obtenerTipoCambio().subscribe({

      // Si la API responde bien
      next: (respuesta) => {
        this.valorQuetzal = respuesta.rates.GTQ;
        this.horaDeActualizacion = new Date().toLocaleString('es-GT');
        this.estaCargando = false;
      },

      // Si la API falla
      error: () => {
        this.mensajeDeError = 'No se pudo obtener el tipo de cambio. Verifica tu conexión e intenta de nuevo.';
        this.estaCargando = false;
      }

    });
  }

}