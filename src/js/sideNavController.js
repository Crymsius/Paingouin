// sideNavController.js 
// Controller du drawer
(function() {
	'use strict';

	angular
		.module('app')
		.controller('sideNavController', sideNavController);

	function sideNavController($mdSidenav) {
		var vm=this;
		vm.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
	}
})();

// var app = angular.module('StarterApp', ['ngMaterial']);

// app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
//   $scope.toggleSidenav = function(menuId) {
//     $mdSidenav(menuId).toggle();
//   };
 
// }]);