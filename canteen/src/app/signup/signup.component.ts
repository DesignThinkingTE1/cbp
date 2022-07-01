import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pass=false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(ref:NgForm)
  {
    console.log("form submitted")
    let temp=ref.value;

    if(temp.password!=temp.confirm)
    {
      this.pass=true
    }
    else if(temp.username==""||temp.email==""||temp.password==""||temp.confirm==""){
      alert("enter required fields")
    }
    else
    {
      this.pass=false
      console.log(temp)
      localStorage.setItem(temp.email,temp.password)
      alert("signup successfull !!! login to continue");
      this.router.navigateByUrl("/login")

    }
    

  }
}
