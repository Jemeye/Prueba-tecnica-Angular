import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../common/material/material.module";
import { HomeRoutingModule } from './home-routing.module';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConfirmDialogComponent } from './modal/confirm-dialog/confirm-dialog.component';
import { ProductModalComponent } from './modal/product-modal/product-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSideBarComponent,
    ProductsComponent,
    ConfirmDialogComponent,
    ProductModalComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    ProductModalComponent
  ],
  providers: [
    CdkStepper
  ]
})
export class HomeModule {
}
