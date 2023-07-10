import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  //loggedIn=false;
  //currentUser$: Observable<User | null>=of(null);
  


  constructor(public accountService:AccountService) { }

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
      next: response => {
        console.log(response);
        /*this.loggedIn = true; non viene più usato dopoasync pipe*/
      },
      error:error =>console.log(error)
    })
  }

  logout(){
    this.accountService.logout();
    /*this.loggedIn =false;non viene più usato dopoasync pipe*/
  }

 
  

}
