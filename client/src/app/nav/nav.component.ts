import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  //loggedIn=false;
  //currentUser$: Observable<User | null>=of(null);
  


  constructor(public accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    //this.currentUser$=this.accountService.currentUser$;
  }

  /*
  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next:user=> this.loggedIn=!!user,
      error: error => console.log(error)
    })
  } non viene più usato dopoasync pipe*/

  login(){
    //console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: _ => 
        this.router.navigateByUrl('/members')
        //console.log(response);
        /*this.loggedIn = true; non viene più usato dopoasync pipe*/
      ,
      error:error =>{console.log(error);window.alert(error.error);}
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    /*this.loggedIn =false;non viene più usato dopoasync pipe*/
  }

 
  

}
