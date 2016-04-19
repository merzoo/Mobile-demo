"use strict";

define(["angular"],function(angular){

	var moduleName = "sidebarDir";

	angular.module(moduleName,[])
		.directive("sidebar", [function(){
			return {
				restrict: "E",
				templateUrl: "template/sidebar.html",
				replace	: true,
				transclude : true,
				link : link,
			}
		}]);

	function link(scope, element, attrs){
		scope.active = "";

		scope.open = function(){
			scope.active = "active";
		};

		scope.close = function(){
			scope.active = "";
		};

		scope.$on("OPEN_SIDEBAR", function(){
			scope.open();
		});

		scope.$on("CLOSE_SIDEBAR", function(){
			scope.close();
		});
	}

	return moduleName;
})