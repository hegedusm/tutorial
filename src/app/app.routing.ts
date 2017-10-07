import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {TUTORIAL_BASE_PATH} from "../tutorials/tutorial-root.routing";

// Components that are used in the routes below
export const routingComponents: any[] = [];

// Application level routes go here. Like error page, not-found page, etc.
const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: TUTORIAL_BASE_PATH }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
