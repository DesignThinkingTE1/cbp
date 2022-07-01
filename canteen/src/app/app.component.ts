import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canteen';
  constructor(private router:Router) {
   }
   status:any
   
   ngOnInit(): void {
     let temp=localStorage.getItem("email")
     this.status=true
     if(temp==null)
     {
       this.status=false
     }
     else
      this.status=true
  }
  userLogout()
  {
    this.status=false
    this.router.navigateByUrl("./login")
    localStorage.removeItem("email")

  }


}
