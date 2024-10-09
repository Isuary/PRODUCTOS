import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css'],
  standalone: true
})
export class RegistroProductosComponent {
  constructor(private router: Router) {}

  onConsultaProductosClick() {
    // Aquí rediriges a la página de consulta de productos
    this.router.navigate(['/consulta-producto']);
  }
}

