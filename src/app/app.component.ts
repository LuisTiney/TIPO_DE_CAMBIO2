import { Component } from '@angular/core';
import { TipoCambioComponent } from './components/tipo-cambio/tipo-cambio.component';

// Componente raíz: simplemente carga nuestra pantalla de tipo de cambio
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TipoCambioComponent],
  template: `<app-tipo-cambio></app-tipo-cambio>`
})
export class AppComponent {}