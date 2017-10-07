/**
 * First of all, I am aware that there are approx. 10000 breadcrum components out in the field,
 * but i wanted to see if i can build one myself, without google... :D
 * I will use more common components after this one:)
 */
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from "@angular/router";

import "rxjs";


interface BreadcrumbData {
	title: string;
	path: string;
}

@Component({
	selector: "breadcrumb",
	templateUrl: "./breadcrumb.component.html",
	styleUrls: ["./breadcrumb.component.css"]
})
export class BreadCrumbComponent implements OnInit {

	public breads: BreadcrumbData[] = [];

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {

	}

	public ngOnInit(): void {
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			this.breads = [];
			this.fillCurrentBreads(this.activatedRoute.snapshot);
		});
	}

	//fills the breads based on the given snapshot
	//root route will be ignored
	private fillCurrentBreads(from: ActivatedRouteSnapshot): void {
		//root has no parents
		if (from.parent !== null)
			this.breads.push({
				title: from.data && from.data.title ? from.data.title : "",
				path: from.pathFromRoot
					.map(path => path.routeConfig && path.routeConfig.path ? path.routeConfig.path : "") //we want the path of the root (root has empty path)
					.reduce((currentPath, path) => currentPath + "/" + path) //concatenate (root has empty path, so it will start with a "/" [<empty>+"/"+...])
			});
		if (from.children && from.children.length > 0) {
			this.fillCurrentBreads(from.children[0]);
		}
	}



}
