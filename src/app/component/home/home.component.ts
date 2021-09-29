import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private endpointService:ProductService) { }

  ngOnInit(): void {
    this.getAlltheProducts();
  }

  getAlltheProducts(){
    this.endpointService.getAllTheProducts().subscribe(data => this.products = data);
  }
  itemImageUrl = '../assets/images.jpg';
}

