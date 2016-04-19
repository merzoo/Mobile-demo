"use strict";

define(["angular"], function(angular){

	var moduleName = "headerDir";

	angular.module(moduleName,[])
		.directive("header", [function(){
			return {
				restrict: "E",
				templateUrl: "template/header.html",
				replace: true,
				link: link,
			}
		}]);

	function link(scope, element, attrs){
		scope.openSidebar = function(){
			scope.$emit("OPEN_SIDEBAR");
		}
	}

	return moduleName;
});
