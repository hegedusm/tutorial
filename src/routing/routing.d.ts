import { Routes, Route, RouterModule } from "@angular/router";
import { RoutingData } from "./routing.data";

export declare type CustomRoutes = CustomRoute[];

export interface CustomRoute extends Route {

	data?: RoutingData;
}