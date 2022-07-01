import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items=[{"name":"idli","price":30 , "image" : "../assets/idli2-removebg-preview.png" },
  {"name":"vada","price":30 , "image" : "../assets/vada1-removebg-preview.png"},
  {"name":"dosa","price":35 , "image" : "../assets/dosa3-removebg-preview.png"},
  {"name":"poori","price":30 , "image" : "../assets/puri2-removebg-preview.png"},
  {"name":"chapathi","price":40 , "image" : "../assets/roti1__2_-removebg-preview.png"},
  {"name":"meals","price":40 , "image" : "../assets/meals2-removebg-preview.png"}
]
  constructor(private router:Router,private obj:OrdersService) { }
  empty=false
  pay = false
  order=this.obj.ordersList()
  total=this.obj.total
  ngOnInit(): void {
    
  }
  

  onAdd(product){
    console.log(localStorage.getItem("name"))
    if(localStorage.getItem("email")==null)
    {alert("login to add to cart");
    this.router.navigateByUrl("login");
  }
  else 
  {   alert(product.name+"  added")
    this.obj.total+=product.price;
    this.total+=product.price;
    if(this.obj.total!=0)
    {
      this.empty=true
    }
    //localStorage.setItem("total",stringify(this.total))
    this.obj.orders.push(product);
  }
  }

  ondelete(product)
  { 
    for( var i = 0; i < this.obj.orders.length; i++){ 
    
      if ( this.obj.orders[i].name === product.name) { 
  
          this.obj.orders.splice(i, 1); 
          break
      }
  }
  this.obj.total=this.obj.total-product.price;
  this.total -=product.price
}

payDetails()
{
  this.pay = true;
  this.obj.linkStatus=true
  alert("paid")
  this.router.navigateByUrl("profile");
}


onLink()
{this.obj.linkStatus=true
  this.router.navigateByUrl("profile");
  
}
}

