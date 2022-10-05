import { Component, Injectable, OnInit } from "@angular/core";
import { DashboardItem } from "../../interfaces/dashboard.item.type";
import { DashboardService } from "../../services/dashboard.service";
import { ToastService } from "../../services/toast.service";
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/interfaces/product.type";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
@Injectable({
  providedIn: "root",
})
export class DashboardComponent implements OnInit {
  public elements: DashboardItem[] = [];
  public loading = false;
  public ngxLoadingAnimationTypes = {
    chasingDots: "chasing-dots",
    circle: "sk-circle",
    circleSwish: "circleSwish",
    cubeGrid: "sk-cube-grid",
    doubleBounce: "double-bounce",
    none: "none",
    pulse: "pulse",
    rectangleBounce: "rectangle-bounce",
    rotatingPlane: "rotating-plane",
    threeBounce: "three-bounce",
    wanderingCubes: "wandering-cubes",
  };

  public products: Product [] = [];

  constructor(
    private dashboardService: DashboardService,
    private toast: ToastService,
    private productService: ProductsService
  ) {
  }



  public ngOnInit() {
    // this.getData().then();
    this.productService.getProducts()
    .subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

  /**
   * getMetrics
   */
  public async getData() {
    try {
      this.loading = true;
      this.elements = await this.dashboardService.getNewDashboardData();
      this.loading = false;
    } catch (e) {
      console.log(e);
      this.toast.error(
        "No se pudieron obtener los indicadores del dashboard, revise su conexión"
      );
    }
  }
}
