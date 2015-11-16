//THis Module defines our application
var myApp = angular.module('MyApp',[]);
myApp.controller('myCtrl',function($scope)
{
//data can be received from http server, an array
//scope is the owner of all variables and functions in a given controller
$scope.phone = "0723 151591"; 
$scope.email = "wagavincent@gmail.com"; 
$scope.city = "Nairobi";
$scope.state = "Kenya"; 
});

myApp.controller('myCars',function($scope)
{
$scope.cars = [
{brand:"Toyota", model:"Vits", type:"Saloon", year:"2005",image:"https://t1-cms-2.images.toyota-europe.com/toyotaone/gben/toyota-Yaris-2014-exterior-tme-008-a-thumb_tcm-3060-188651.jpg"},
{brand:"Honda", model:"Fit", type:"Saloon", year:"2010",image:"http://media.caranddriver.com/images/media/267451/2009-honda-fit-photo-94268-s-429x262.jpg"},
{brand:"Ford", model:"SUV", type:"Saloon", year:"2015",image:"http://media.caranddriver.com/images/media/267451/2009-honda-fit-photo-94268-s-429x262.jpg"},
{brand:"Toyota", model:"Vits", type:"Saloon", year:"2014",image:"https://t1-cms-2.images.toyota-europe.com/toyotaone/gben/toyota-Yaris-2014-exterior-tme-008-a-thumb_tcm-3060-188651.jpg"},
{brand:"Mitsubishi", model:"Legacy",type:"Pick-Up", year:"2009",image:"https://t1-cms-2.images.toyota-europe.com/toyotaone/gben/toyota-Yaris-2014-exterior-tme-008-a-thumb_tcm-3060-188651.jpg"},
{brand:"Nissan", model:"Navara",type:"Double Cabin", year:"2002",image:"http://c2c.sulekhalive.com/lcproducts/cars/images/nissan-micra-xe.jpg"}

];
});




myApp.controller('blogsController',function($scope,$http){

var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
	$http.get(url).success(function(response)
	{

		$scope.posts = response;
	});

});