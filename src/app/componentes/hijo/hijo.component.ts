import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  datos:any[]=[{nombreDos:'Norman',apellido:'Coayla',carrera:'Sistemas'}]
  registrar(nombreDos:string,apellido:string,carrera:string){
    this.datos.push({nombreDos,apellido,carrera})
    
   }
  
   eliminar(index:number){
    this.datos.splice(index,1)
     
   }
  constructor() { }

  ngOnInit(): void {
  }

}
