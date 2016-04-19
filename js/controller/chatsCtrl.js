"use strict";

define(["angular", "httpService"], function(angular, httpService){

	return ['$scope','httpService',function($scope, httpService){

  		httpService.getJson("userList.json", function(data){
  			$scope.userList = data;
  		})

	}]

});