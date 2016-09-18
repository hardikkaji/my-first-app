(function (angular) {

	var todoApp = angular.module('todo.app', []);
	todoApp.directive('todoSvg', function () {
		// directive construct
		return {
			restrict: 'E',
			scope: {
				'type': '@type'
			},
			templateUrl: 'partials/todo-svg.html'
		};
	});

	angular.bootstrap(document, ['todo.app']);
})(window.angular);
