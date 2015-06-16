// listeMembres.directive.js

/**
* @desc on affiche le fichier html liste-membres.html
* @example <liste-membres></liste-membres>
*/

(function() {
    'use strict';

    angular
        .module('app')
		.directive('listeMembres', listeMembres);

	function listeMembres() {
		return {
			restrict: 'E',
			templateUrl: 'liste-membres.html'
		};
	};
})();
