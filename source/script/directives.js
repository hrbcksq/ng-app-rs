;(function(){
	var app = angular.module("product-directives", []);

	app.directive('productHeader', function(){
        return {
            restrict: "E",
            templateUrl: "../partial/product-header.html"
        };
    });
});