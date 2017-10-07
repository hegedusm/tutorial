import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { TutorialRootModule } from "../tutorials/tutorial-root.module";
import { AppRoutingModule } from "./app.routing";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TutorialRootModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
