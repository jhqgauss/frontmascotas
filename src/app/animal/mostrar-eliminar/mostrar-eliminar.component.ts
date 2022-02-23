import { Component, OnInit } from '@angular/core';
import { AnimalsServiceService } from 'src/app/animals-service.service';

@Component({
  selector: 'app-mostrar-eliminar',
  templateUrl: './mostrar-eliminar.component.html',
  styleUrls: ['./mostrar-eliminar.component.css']
})
export class MostrarEliminarComponent implements OnInit {

  constructor(private service:AnimalsServiceService) { }

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

  deleteClick(items: { AnimalId: any; }){
    if(confirm("¿esta seguro que desea adoptar?")){
      this.service.deletelist(items.AnimalId).subscribe(data=>{
        alert(data.toString());
        this.verMascotalist();
      })
    }
  }
  

}
