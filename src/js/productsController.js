//productsController.js
//Controlleur de la réception des données relatives aux produits.

(function() {
	'use strict';

	angular
		.module('app')
		.controller('productsController', productsController);

	function productsController($scope, $http) {
		console.log($scope);
		var vm = this;
		console.log(vm);
		$http.get("donnees.php")
		.success(function (response) {
			console.log('connexion réussie !');
			vm.products = response;
		})
		.error(function(){
			console.log('erreur de connexion')
		});
	}
})();