import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:3500';
  private authState=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  isAuthenticated(){
    return this.authState.asObservable();
  }

  checkSession(){
    const sessionId=localStorage.getItem('sessionId');
    if(!sessionId){
      this.authState.next(false);
      return;
    }
  }

  //register
  register(userData:any){
    return this.http.post(`${this.apiUrl}/register`,userData);
  }

  //login
  login(credentials:any){
    return this.http.post(`${this.apiUrl}/login`,credentials).subscribe(
      (res:any)=>{
        localStorage.setItem('sessionId',res.session._id);
        this.authState.next(true);
        this.router.navigate(['/page1']);//redireccion   
      },
      (err:any)=>{
        console.log('Login error: ',err);
      }
    )
  }

  //logout
  logout(){
    localStorage.removeItem('sessionId');
    this.authState.next(false);
    this.router.navigate(['login']);//redireccion
  }
}
