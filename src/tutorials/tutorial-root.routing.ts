import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ServerRootComponent } from "./server/server-root.component";
import { ClientRootComponent } from "./client/client-root.component";
import { TutorialRootComponent } from "./tutorial-root.component";
import { RoutingData } from "../routing/routing.data";
import { CustomRoutes } from "../routing/routing";


export const routingComponents: any[] = [
	ServerRootComponent,
	ClientRootComponent,
	TutorialRootComponent
];

export const TUTORIAL_BASE_PATH = "tutorial";

export const routingProviders: any[] = [];

const routes: CustomRoutes = [
	{
		path: TUTORIAL_BASE_PATH,
		component: TutorialRootComponent,
		data: {title: "tutorial"},
		children: [
			{
				path: "server",
				component: ServerRootComponent,
				data: { title: "server" }
			},
			{
				path: "client",
				component: ClientRootComponent,
				data: { title: "client" }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TutorialRoutingModule { }
