import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  orders=[]
  total=0
  linkStatus:boolean=false
 
  ordersList()
  {
    return this.orders
  }
 

 
}
