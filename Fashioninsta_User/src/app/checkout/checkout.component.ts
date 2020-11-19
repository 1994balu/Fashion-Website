import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderplaced:string;
  flag:boolean=false;
  checkout:FormGroup;
  constructor() { 
    this.checkout=new FormGroup({});
  }

  ngOnInit(): void {
  }
  onsubmit():void{
    console.log("method works");
    this.flag=true;
    this.orderplaced="Thanks for your order! We wish to deliver your product soon!"
  }

}
