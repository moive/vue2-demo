import Vue from "vue";

import test from "./test.vue";

let o = {
	test,
};

let routes = [];

let componentLibrary = {
	components: o,
	routes: routes,
	register: function() {
		for (var k in o) {
			let c = Vue.component(o[k].name, o[k]);
			if (o[k].route) {
				let or = o[k].route;
				or.component = c;
				routes.push(or);
			}
		}
	},
};

componentLibrary.register();

export default componentLibrary;
