import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent implements OnInit {
  
  public datosFormulario: FormData = new FormData();
  public formEnviado: boolean = false;

  enviarFormulario() {
    this.formEnviado = true;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
class FormData {
  nombre!: string;
  apellido!: string;
  carrera!:string;
}