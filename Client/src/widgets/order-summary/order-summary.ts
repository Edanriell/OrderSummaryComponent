import { Component } from "@angular/core";
import { PricePlan } from "@widgets/price-plan";

@Component({
	selector: "order-summary",
	standalone: true,
	templateUrl: "./order-summary.html",
	imports: [PricePlan],
	styleUrl: "./order-summary.less"
})
export class OrderSummary {}
