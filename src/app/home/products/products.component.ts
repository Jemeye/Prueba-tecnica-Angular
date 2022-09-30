import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/interfaces/product.type';
import { ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'options'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productsService: ProductsService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    //call service to get products
    this.productsService.getProducts()
    .subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchProduct(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addProduct() {}

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id)
    .subscribe(data => {
      console.log(data);
    })
    this.toastService.success('Producto eliminado correctamente');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

}
