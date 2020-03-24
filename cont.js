var app=angular.module('myapp',['ngRoute']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

//$locationProvider.html5Mode(true);//
$routeProvider

.when('/',{
	templateUrl:'first.html',
	controller:'mctrl'

}).when('/first',{
templateUrl:'first.html',
controller:'mctrl'
}).when('/second',{
templateUrl:'second.html',
controller:'mctrl'
}).otherwise({
	redirectTo:'/first'
});

}]);



app.controller('mctrl',['$scope','$http','$location',function($scope,$http,$location){
$scope.idd="d1";
		$scope.myimg="hap.png";
$scope.doNext=function(){
	console.log("hhhh");
$location.path("second");

}
$scope.done=function () {
	console.log("hsss");
	$scope.idd="d2";
}

		}]);

