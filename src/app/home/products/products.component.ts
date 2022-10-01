import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/interfaces/product.type';
import { ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../modal/confirm-dialog/confirm-dialog.component';
import { ProductModalComponent } from '../modal/product-modal/product-modal.component';


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
    private toastService: ToastService,
    public dialog: MatDialog
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

  //add product
  addProduct() {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '700px',
      data: {
        title: 'Agregar un nuevo producto',
        id: 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result == true){
        this.toastService.success('Producto agregado correctamente');
        setTimeout(() => {window.location.reload();}, 2000);
      }else
      {
        this.toastService.info('Operación cancelada');
      }
    });
  }

  //edit product
  updateProduct(id: number) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '700px',
      data: {
        title: 'Agregar un nuevo producto',
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result == true){
        this.toastService.success('Producto actualizado correctamente');
        setTimeout(() => {window.location.reload();}, 2000);
      }else
      {
        this.toastService.info('Operación cancelada');
      }
    });

  }

  //delete product
  deleteProduct(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: '¿Estás seguro de eliminar este producto?'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result == true){
        this.productsService.deleteProduct(id)
        .subscribe(data => {
          console.log(data);
        })
        this.toastService.success('Producto eliminado correctamente');
        setTimeout(() => {window.location.reload();}, 2000);
      }else
      {
        this.toastService.info('Operación cancelada');
      }
    });
  }
}
