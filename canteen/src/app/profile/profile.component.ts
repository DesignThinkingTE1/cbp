import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private obj:OrdersService) { }
  order=this.obj.ordersList()
  len=this.order.length
  total=this.obj.total
  st=this.obj.linkStatus
  ngOnInit(): void {
   
  }

  onDelete()
  {
    alert("deleted")
    this.len=0
  }

}
