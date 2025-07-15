import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'admin@test.com', password: 'admin', role: 'admin' },
    { email: 'user@test.com', password: 'user', role: 'user' }
  ];
  constructor(private router: Router) {}
  login(email: string, password: string): boolean {
    
    if (email === 'admin@test.com' && password === 'admin') {
      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('role', 'admin');
      return true;
    }
    if (email === 'user@test.com' && password === 'user') {
      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('role', 'user');
      return true;
    }
    return false;
  }
    logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
