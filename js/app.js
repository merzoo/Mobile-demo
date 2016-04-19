"use strict";

define(["angular","angularRoute","chatsCtrl","headerDir","sidebarDir","menuDir","navDir","httpService" ],
	function(angular,angularRoute,chatsCtrl,headerDir,sidebarDir,menuDir,navDir,httpService){

	var app = angular
		.module("app",['ngRoute',headerDir,sidebarDir,menuDir,navDir,httpService])
    .controller("chatsCtrl", chatsCtrl)
    .config(['$routeProvider', setRoute]);

	function setRoute($routeProvider){
		$routeProvider
    	.when("/", {
        	templateUrl: "template/welcome.html",
      	})
      	.when("/alarm",{
      		templateUrl: "template/alarm.html",
      	})
      	.when("/compose",{
      		templateUrl: "template/compose.html",
      	})
      	.when("/chats",{
      		templateUrl: "template/chats.html",
          controller: "chatsCtrl",
      	})
      	.when("/profile",{
      		templateUrl: "template/profile.html",
      	})
      	.when("/settings",{
      		templateUrl: "template/settings.html",
      	})
      	.when("/credits",{
      		templateUrl: "template/credits.html",
      	})
    	.otherwise({ redirectTo: '/' });
	}

	return app;
});