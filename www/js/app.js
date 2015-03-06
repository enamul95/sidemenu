// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'SignInCtrl'
        })
		
	 .state('welcome.home', {
      url: "/home", 	 
	    views: {
        'menuContent' :{  
			
		  controller: 'homeCtrl',
			templateUrl: "home.html",
        }
	}     
    
    })	
	
	
	 .state('welcome.home2', {
      url: "/home2",   
	    views: {
        'menuContent' :{         
		  controller: 'home2Ctrl',
			templateUrl: "home2.html",
        }
	}     
    
    })	
	
		
	 .state('welcome.logout', {
      url: "/logout",   
	    views: {
        'menuContent' :{         
		  controller: 'logoutCtrl'
		
        }
	}     
    
    })	
	
	

		
		
	 .state('welcome', {
      url: "/welcome", 	  
      templateUrl: "welcome.html"
    })
		 $urlRouterProvider.otherwise("/signin");
		// $urlRouterProvider.otherwise("/welcome/home");
	})
	
.controller('SignInCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
	//$urlRouterProvider.otherwise("/welcome/home");
	
	
	
	
	$scope.login=function(user){
		 $state.go("welcome");
	}
	
})
	
.controller('welcomeCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {
	
	
		
})

.controller('homeCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {

	$scope.doclick=function(user){
		alert("Home");
	}
	
		
})


.controller('home2Ctrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {


	$scope.doclick=function(user){
		alert("Home 2");
	}
	
		
})

.controller('logoutCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup,$filter) {


	$scope.logout=function(){
		alert("lo");
	}
	
		
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
