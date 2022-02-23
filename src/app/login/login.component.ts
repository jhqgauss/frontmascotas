import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariopre={
    email: 'jorgehoyos@seti.com.co',
    password:'12345'
  }

  usuario={
    email: '',
    password:''
  }
constructor(private authService:AuthService,private router:Router){

}

  ingresar(){
    console.log(this.usuario);
    const{email,password}=this.usuario
    if(this.usuariopre.email == this.usuario.email && this.usuariopre.password == this.usuario.password){
      this.authService.register(email,password).then(res=>{
        this.router.navigate(['/mascotas'])
       })
     }else{
      Swal.fire("Contraseña incorrecta")
    .then(() => {
        // Aquí la alerta se ha cerrado
        window.location.reload();
    });
     }
    
      
    }
    

  ingresarconGoogle(){
    const{email,password}=this.usuario
    this.authService.loginGoogle(email,password).then(res=>{
      this.router.navigate(['/mascotas'])
    })
  }

  ngOnInit(): void {
  }

}
