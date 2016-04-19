require.config({
	baseUrl: "js/",
	paths: {
		"angular" : "../lib/angular",
		"angularRoute" : "../lib/angular-route.min",
		"chatsCtrl":"controller/chatsCtrl",
		"headerDir": "directive/header",
		"sidebarDir": "directive/sidebar",
		"menuDir": "directive/menu",
		"welcomeDir": "directive/welcome",
		"alarmDir": "directive/alarm",
		"composeDir": "directive/compose",
		"chatsDir" : "directive/chats",
		"profileDir": "directive/profile",
		"settingsDir": "directive/settings",
		"creditsDir": "directive/credits",
		"navDir": "directive/nav",
		"add":"directive/add",
		"httpService": "service/httpService",
	},
	shim: {
		'angular': {
          exports: 'angular'
    	},
    	'angularRoute':{
          deps: ["angular"],
          exports: 'angularRoute'
       },
	}
});

require(["angular","app"], function(angular){
	angular.bootstrap(document, ["app"]);
});