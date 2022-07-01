import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  onCreate(){
    console.log("working")
    this.router.navigateByUrl('/signup')
  }
  ngOnInit(): void {
  
    
  }
  onLogin(ref:NgForm)
  {
    console.log(ref.value)
    let temp=ref.value
    if (temp.password==localStorage.getItem(temp.email))
          {alert("login success");localStorage.setItem("email",temp.email)
        this.router.navigateByUrl("/home")}

    else 
      alert("wrong password try again !!!")

  }

}
