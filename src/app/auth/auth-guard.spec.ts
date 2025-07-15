import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('authGuard', () => {
  let authGuard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    authGuard = new AuthGuard(authServiceSpy, routerSpy);
    authService = authServiceSpy;
    router = routerSpy;
  });

  it('should return true if authenticated', () => {
    authService.isAuthenticated.and.returnValue(true);
    expect(authGuard.canActivate()).toBeTrue();
  });

  it('should navigate to login if not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false);
    expect(authGuard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
