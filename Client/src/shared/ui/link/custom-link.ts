import { Component, Input } from "@angular/core";

@Component({
	selector: "custom-link",
	standalone: true,
	templateUrl: "./custom-link.html",
	styleUrl: "./custom-link.less"
})
export class CustomLink {
	@Input() styles: string = "";
	@Input({ required: true }) linkType: "button" | "ghost" = "button";
	@Input({ required: true }) linkText: string = "";
	@Input({ required: true }) linkHref: string = "#";
}
