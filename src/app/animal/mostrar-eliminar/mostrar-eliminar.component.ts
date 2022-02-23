import { Component, OnInit } from '@angular/core';
import { AnimalsServiceService } from 'src/app/animals-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-eliminar',
  templateUrl: './mostrar-eliminar.component.html',
  styleUrls: ['./mostrar-eliminar.component.css']
})
export class MostrarEliminarComponent implements OnInit {

  constructor(private service:AnimalsServiceService) { }
  id='';
  MascotasList:any=[];

  ngOnInit(): void {
    this.verMascotalist();
  }

  verMascotalist(){
    this.service.getlist().subscribe(data=>{
      this.MascotasList=data;
      console.log(this.MascotasList);
    })
  }
 adoptar(){
  Swal
  .fire({
      title: "Regalanos un número de contacto",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
 });
 } 

}
