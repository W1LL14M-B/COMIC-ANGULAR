import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }

onLogin() {
  if (this.email === 'admin' && this.password === 'admin') {
    this.router.navigate(['/navbar']);
  } else {
alert('Credenciales Invalidas')
  }

}
}

