import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  email: string = "suporte@sealth.com.br";
  constructor(private router: Router) { }
  
  openLogin(): void {
    this.router.navigate(['/login']);
  }
}
