import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-dashboard.component',
  standalone:true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  role: string | undefined;
  constructor(private auth: AuthService, private router: Router) {
    const role = this.auth.getRole();
    console.log("hi");
    

  }

  logout() {

    this.auth.logout();
    this.router.navigate(['/login']);
  }
  openChat() {
    this.router.navigate(['/chat']);
  }
}
