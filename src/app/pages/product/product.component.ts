import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from 'src/app/components/product-modal/product-modal.component';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/types/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = false;
  displayedColumns: string[] = ['name', 'features', 'plans'];

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.dataService.getProducts().subscribe((data: { products: Product[] })=>{
      if (data && data.products) {
        this.products = data.products;
      }
      this.isLoading = false;
      console.log(123, this.products);
    });
  }

  onHandleRowClick(product: Product) {
    console.log(123, product)
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '450px',
      data: product
    });
  }

}
