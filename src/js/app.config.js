//app.config.js
var app = angular.module('app', ['ngMaterial'])
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

	/*configure.$inject = 
		['$mdThemingProvider'];*/

	// function configure($mdThemingProvider) {
	// 	$mdThemingProvider.theme('default')
	// 		.primaryPalette('amber', {
	// 			'default': '400',
	// 		})
	// 		.accentPalette('red')
	// 		.backgroundPalette('yellow', {
	// 			'default':'500',
	// 		});
	// 	$mdThemingProvider.theme('altTheme')
	// 		.primaryPalette('blue')
	// 		.backgroundPalette('red');
	// 	}
//})();