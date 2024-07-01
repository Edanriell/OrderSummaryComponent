import { Component } from "@angular/core";

import { OrderSummary } from "@widgets/order-summary";

@Component({
	selector: "main-page",
	standalone: true,
	imports: [OrderSummary],
	templateUrl: "./main-page.html",
	styleUrl: "./main-page.less"
})
export class MainPage {}
