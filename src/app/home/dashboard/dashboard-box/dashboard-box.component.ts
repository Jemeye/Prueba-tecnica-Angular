import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/product.type";
import { DashboardItem } from "../../../interfaces/dashboard.item.type";
import { DashboardService } from "../../../services/dashboard.service";
import { DashboardComponent } from "../dashboard.component";

@Component({
  selector: "app-dashboard-box",
  templateUrl: "./dashboard-box.component.html",
  styleUrls: ["./dashboard-box.component.css"],
})
export class DashboardBoxComponent implements OnInit {
  public expanded = false;
  @Input() public data: Product;
  @Input() public mainRef: DashboardComponent;
  // must be changed for real data from dashboard component, does not make sense call a service from this component
  public fixedData: DashboardItem;

  constructor(
    private dashboardService: DashboardService) {
    this.fixedData = this.dashboardService.getNewDashboardData()[0];
  }

  public ngOnInit(): void {
    console.log(this.data+" box dashboard");
    this.data.images.values
  }

  /**
   * changePanel
   */
  public changePanel() {
    this.expanded = !this.expanded;
  }
}
