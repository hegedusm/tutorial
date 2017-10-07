import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BreadCrumbComponent } from "./breadcrumb/breadcrumb.component";
import { HeadComponent } from "./header.component";
import { RouterModule } from "@angular/router";


@NgModule({
	imports: [
		BrowserModule,
		RouterModule
	],
	declarations: [
		BreadCrumbComponent,
		HeadComponent
	],
	providers: [],
	exports: [
		HeadComponent
	]
})
export class HeaderModule { }
