"use strict";

define(["angular"], function(angular){

	var moduleName = "httpServiceModule";

	angular.module(moduleName,[])
		.factory("httpService",['$http', function($http){
			var baseUrl = "./json/";

			function getJson(jsonFile,cbk){
				$http.get(baseUrl+jsonFile)
					.success(cbk);
			}

			return {
				getJson : getJson
			}
		}])

	return moduleName;
});