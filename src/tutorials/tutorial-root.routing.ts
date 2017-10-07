import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ServerRootComponent } from "./server/server-root.component";
import { ClientRootComponent } from "./client/client-root.component";
import { TutorialRootComponent } from "./tutorial-root.component";
import { RoutingData } from "../routing/routing.data";


export const routingComponents: any[] = [
	ServerRootComponent,
	ClientRootComponent,
	TutorialRootComponent
];

export const TUTORIAL_BASE_PATH = "tutorial";

export const routingProviders: any[] = [];

const routes: Routes = [
	{
		path: TUTORIAL_BASE_PATH,
		component: TutorialRootComponent,
		data: <RoutingData>{ title: "Start dis" },
		children: [
			{
				path: "server",
				component: ServerRootComponent,
				data: { title: "PAGES_TITLE_LABEL" }
			},
			{
				path: "client",
				component: ClientRootComponent,
				data: { title: "PAGES_TITLE_LABEL" }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TutorialRoutingModule { }
