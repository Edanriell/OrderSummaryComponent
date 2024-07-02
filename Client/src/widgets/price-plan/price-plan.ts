import { Component, Input } from "@angular/core";

@Component({
	selector: "price-plan",
	standalone: true,
	templateUrl: "./price-plan.html",
	styleUrl: "./price-plan.less"
})
export class PricePlan {
	@Input({ required: true }) pricePlanType: string = "";
	@Input({ required: true }) pricePlanPrice: string = "";
}
