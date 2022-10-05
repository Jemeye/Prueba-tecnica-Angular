import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from '../interfaces/product.type';
import { DTOProduct } from '../interfaces/DTOProduct.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  //services that call the API to get all products
  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401){
              return throwError('No estás autorizado');
            }
            return throwError('Algo salió mal');
          })
        )
  }

  //services that call the API to get a product by id
  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401){
              return throwError('No estás autorizado');
            }
            return throwError('Algo salió mal');
          })
        )
  }

  //services that call the API to create a new product
  createProduct(product: DTOProduct) {
    return this.http.post<Product>(`${this.apiUrl}/products`, product)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401){
              return throwError('No estás autorizado');
            }
            return throwError('Algo salió mal');
          })
        )
  }

  //services that call the API to update a product
  updateProduct(id: number, changes: DTOProduct) {
    return this.http.put(`${this.apiUrl}/products/${id}`, changes)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401){
              return throwError('No estás autorizado');
            }
            return throwError('Algo salió mal');
          })
        )
  }

  //services that call the API to delete a product
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/products/${id}`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401){
              return throwError('No estás autorizado');
            }
            return throwError('Algo salió mal');
          })
        )
  }

}
