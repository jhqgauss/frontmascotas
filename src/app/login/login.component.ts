import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email: '',
    password:''
  }
constructor(private authService:AuthService,private router:Router){

}

  ingresar(){
    console.log(this.usuario);
    const{email,password}=this.usuario
    this.authService.register(email,password).then(res=>{
     this.router.navigate(['/mascotas'])
    })
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
