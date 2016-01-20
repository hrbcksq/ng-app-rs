;(function() {
    var app = angular.module("store", ['product-directives']);

    app.controller("StoreController", ['$http', function($http) {
        var store = this;
        store.products = [];        

        $http.get('/script/data.json').success(function(data){
            store.products = data;
        });
    }]);

    app.controller("PanelController", function(){
    	this.activeTab = 1; 

    	this.selectTab = function(index){
			this.activeTab = index;
    	};

    	this.isActive = function(index){
    		return index === this.activeTab;
    	};
    });

    app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};			
		};
    });    
}());
