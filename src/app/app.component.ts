import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
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
}
