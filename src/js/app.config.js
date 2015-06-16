var app = angular.module('StarterApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('amber', {
				'default': '400',
			})
			.accentPalette('red')
			.backgroundPalette('yellow', {
				'default':'500',
			});
		$mdThemingProvider.theme('altTheme')
			.primaryPalette('blue')
			.backgroundPalette('red');
	}
);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};
}]);

app.controller('GeneralController',function($scope) {
	$scope.general = [
		{
			title : 'Informations Pratiques',
			url : 'infopratique.html'
		},
		{
			title : 'Contact',
			url : 'contact.html'
		},
		{
			title : 'Forum',
			url : 'forumrencontre.html'
		},

	];
});

app.directive('listeMembres', function(){
		return {
			restrict: 'E',
			templateUrl: 'liste-membres.html'
		};
	});