import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  resultado;
  m1: number;
  m2: number;
  m3: number;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      campo_1: [null, Validators.required],
      campo_2: [null, Validators.required],
      campo_3: [null, Validators.required],
    });
  }
  calcular() {
    this.resultado = this.m1 * (1 + this.m2 / 100) ** this.m3;
    this.resultado = this.resultado.toFixed(2);
    return this.resultado;
  }
}
