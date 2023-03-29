import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  variable: boolean = false;
  edad: number = 18;
  canasto: string[] = [
    'Manzanas',
    'Peras',
    'Platanos',
    'Frutillas',
    'Kiwis',
    'Fresas',
    'Melones',
  ];
  estado: number = 1;

  mayorEdad(): boolean {
    if (this.edad >= 18) {
      return true;
    }
    return false;
  }

  intercambiarEdad(): void {
    if (this.edad == 18) {
      this.edad = 12;
    } else {
      this.edad = 18;
    }
  }

  incrementarEstado(): void {
    if (++this.estado >= 6) {
      this.estado = 1;
    }
  }

  decrementarEstado(): void {
    if (--this.estado <= 0) {
      this.estado = 5;
    }
  }
}
