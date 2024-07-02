import { Component } from "@angular/core";

import { PricePlan } from "@widgets/price-plan";
import { CustomLink } from "@shared/ui";

@Component({
	selector: "order-summary",
	standalone: true,
	templateUrl: "./order-summary.html",
	imports: [PricePlan, CustomLink],
	styleUrl: "./order-summary.less"
})
export class OrderSummary {}
