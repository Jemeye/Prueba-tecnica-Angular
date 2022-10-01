import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DTOProduct } from 'src/app/interfaces/DTOProduct.type';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  public form: FormGroup;
  private product: DTOProduct = {
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: []
  };


  private images: string[] = [
    'https://ibb.co/y886K9w',
  ];

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      id: number
    },
    public fb: FormBuilder,
    public productServices: ProductsService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.data.id != 0){
      this.productServices.getProduct(this.data.id)
      .subscribe(data => {
        this.form.patchValue({
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category.id
        });
      });
    }

  }

  clickNo() {
    this.dialogRef.close();
  }

  onSubmit(): any {
    this.product.title = this.form.value.title;
    this.product.price = this.form.value.price;
    this.product.description = this.form.value.description;
    this.product.categoryId = Number(this.form.value.category);
    this.product.images = this.images;
    console.log(this.product)

    //call service to add product
    if(this.data.id == 0){
      this.productServices.createProduct(this.product)
        .subscribe(data => {
         console.log(data);
         this.dialogRef.close(true);
      });
    }
    else{
      this.productServices.updateProduct(this.data.id, this.product)
      .subscribe(data => {
       console.log(data);
       this.dialogRef.close(true);
    });
    }
  }
}

