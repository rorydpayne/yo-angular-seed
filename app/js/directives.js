'use strict'

var module = angular.module('myApp.directives', []);
	
module.directive('draggable', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.draggable({
				revert: true
			});	
		}
	}
});

module.directive('droppable', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			accept: ".itemHeader",
			hoverClass: "drop-hover",
			drop: function(event, ui) {}
		}
	}
})

