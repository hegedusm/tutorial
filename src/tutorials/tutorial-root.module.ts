import { ModuleWithProviders, NgModule } from "@angular/core";

import { TutorialRoutingModule, routingComponents, routingProviders } from "./tutorial-root.routing";


@NgModule({
	imports: [
		TutorialRoutingModule
	],
	declarations: [
		...routingComponents
	],
	exports: [
	],
	entryComponents: [
	]
})
export class TutorialRootModule {

	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: TutorialRootModule,
			providers: [
				...routingProviders
			]
		};
	}
}
