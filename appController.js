ar myApp = angular.module('MyApp',[]);
// myApp.controller('myCtrl',function($scope)
// {
// //data can be received from http server, an array
// //scope is the owner of all variables and functions in a given controller
// $scope.phone = "0723 151591"; 
// $scope.email = "wagavincent@gmail.com"; 
// $scope.city = "Nairobi";
// $scope.state = "Kenya"; 
// });

myApp.controller('myCars',function($scope)
{
$scope.cars = [
{name:"Mike", age: 12, img_url:"'http://placehold.it/150x150' "},
{name:"Joan", age: 25, img_url:"'http://placehold.it/150x150' "},
{name:"Princeton", age: 41, img_url:"'http://placehold.it/150x150' "},
{name:"Angela", age: 32, img_url:"'http://placehold.it/150x150' "},
{name:"Billy", age: 9, img_url:"'http://placehold.it/150x150' "},
{name:"Max", age: 23, img_url:"'http://placehold.it/150x150' "},
{name:"Michelle", age: 70, img_url:"'http://placehold.it/150x150' "},
{name:"Kate", age: 21, img_url:"'http://placehold.it/150x150' "},

];
});