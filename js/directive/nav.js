"use strict";

define(["angular"], function(angular){

	var moduleName = "navDir";

	angular.module(moduleName, [])
		.directive("nav", [function(){
			return {
				restrict : "E",
				templateUrl: "template/nav.html",
				link : link,
			}
		}])

	function link(scope, element, attrs){
		scope.navActive = "";
		scope.toggleNav = function(){
			scope.navActive = (""==scope.navActive) ? "active" : "";
		}
		
		//监听Sidebar的展开事件
		scope.$on("OPEN_SIDEBAR",function(){
			scope.navActive = "";
		});
	}

	return moduleName;
})