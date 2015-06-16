// listeLogoutController.js

(function() {
	'use strict';

	angular
		.module('app')
		.controller('listeLogoutController', listeLogoutController);

	function listeLogoutController() {
		//var vm = this;
		this.listeLogout = [
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
	};
})();