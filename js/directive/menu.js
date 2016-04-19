"use strict";

define(["angular"], function(angular){

	var moduleName = "menuDir";

	angular.module(moduleName,[])
		.directive("menu", [function(){
			return {
				restrict: "E",
				templateUrl: "template/menu.html",
				replace	: true,
				link : link,
			}
		}]);

	function link(scope, element, attrs){
		scope.menuClick = function(pageKey){
			scope.$emit("CLOSE_SIDEBAR");
		}
	}

	return moduleName;
});