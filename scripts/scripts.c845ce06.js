"use strict";angular.module("wats4030CapstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wats4030CapstoneApp").controller("MainCtrl",["$scope","current","repsearch",function(a,b,c){a.current=b.query(),a.refreshCurrent=function(d){a.current=b.query({location:d}),a.current.$promise.then(function(b){a.repsearch=c.query({lat:b.results[0].geometry.location.lat,lng:b.results[0].geometry.location.lng})})}}]),angular.module("wats4030CapstoneApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4030CapstoneApp").factory("current",["$resource",function(a){return a("https://maps.googleapis.com/maps/api/geocode/json?address=:location&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c",{},{query:{method:"GET",params:{location:"1600+Amphitheatre+Parkway,+Mountain+View,+CA"},isArray:!1}})}]),angular.module("wats4030CapstoneApp").factory("repsearch",["$resource",function(a){return a("https://openstates.org/api/v1/legislators/geo/?lat=:lat&long=:lng",{},{query:{method:"GET",params:{lat:"42.96",lng:"-108.09"},isArray:!0}})}]),angular.module("wats4030CapstoneApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div> This is Main View </div> <!-- START Test Lat - Long data --> <!-- START Test Lat - Long data --> <div class="jumbotron"> <div class="jumbotron"> <h3>Address {{current.name}}</h3> <p> TEST data:</p> <p>1600 Amphitheatre Parkway, Mountain View, CA</p> <p>109 Carolina Ave, Jamaica Plain, MA 02130</p> <p>Seattle University, 12th Avenue, Seattle, WA</p> <p class="lead"> <div ng-init="location=\'1600 Amphitheatre Parkway, Mountain View, CA\'"> <p> <label for="location">To find your repsenatives, put your Street Address in here: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent(location)">Show me my Reps</button> </p> <dl> <dt>Lat</dt> <dd>{{current.results[0].geometry.location.lat}}</dd> <dt>Lng</dt> <dd>{{current.results[0].geometry.location.lng}}</dd> </dl> </div> </p> </div> </div> <!-- END Test Lat - Long data --> <!-- END Test Lat - Long data --> <!--Start RepSearch//////////////////////////--> <!--Start RepSearch//////////////////////////--> <!--////////////////////////////////////\nTThis note refers to 2 variables that are used in the code below. (and created here in the html)\nIt’s a reminder of how to perform a basic function on a site, looping through data.\n	1) var repinfo\n	2) var role\nThe data that is returned from the API can be looped through and any data they contain\ncan be pulled out to show on the site.\nSETP ONE:\nData returned from the API : repsearch - (an array containing a bunch of objects).\n<dl ng-repeat="repinfo in repsearch”…..\n	means: Go through the array (repsearch) and pull out anything you find inside that array.\n		Each thing found will be added to the variable repinfo.\n\n	So..  <dd>{{repinfo.last_name}}….:\n		Means: Go through repsearch and add all the last_name values to repinfo.\n		The double curlies means print it out on the site.\nNEXT STEP\nThere is an array inside this array, called roles.\nRoles, is (also) the whole array (of roles). We want to pull out parts of\nthat array and deal with them the way we want. Some parts we don’t care about,\nsome parts get put here, others go there. The procedure is the same as above.\nMake a variable to hold the parts of the array we are interested in.\n\nData returned from the API : repsearch - (is an array that also contains an array called: roles).\n		We are already looping through repsearch and adding data to repinfo (step one).\n		While doing this: When the site gets to the array roles:\n		let’s loop through that and add any data found to another variable: role.\n\n<dl ng-repeat="role in repinfo.roles”….\n	means: Go through the array (roles) and pull out anything you find inside that array.\n		Each thing found will be added to the variable role.\n\n	So..  <dd>{{role.term}}….:\n		Means: Go through (repsearch.roles??????) and add all the term values to role.\n		The double curlies means print it out on the site.\n\nRINSE AND REPEATE\n////////////////////////////////////--> <div class="container-fluid"> <div class="row is-flex"> <h1>Your Reps</h1> <div ng-init="repsearch" class="container" style="width:100%"> <dl class="col-sm-6 col-md-4 col-lg-4" ng-repeat="repinfo in repsearch"> <dd><img class="img-responsive" ng-src="{{repinfo.photo_url}}"></dd> <!--Data supplies chamber: upper or lower to designate House or Senate\nUpper & Lower are meaningless to the public so we\'ll translate them here.--> <dd ng-switch="repinfo.chamber"> <span ng-switch-when="lower">HOUSE</span> <span ng-switch-when="upper">SENATE</span> </dd> <dd>{{repinfo.last_name}} {{repinfo.first_name}}</dd> <dd>Party: {{repinfo.party}}</dd> <dl ng-repeat="office in repinfo.offices"> <dd>Phone: {{office.phone}}</dd> <dd ng-if="office.fax">Fax: {{office.fax}}</dd> <dd ng-if="office.email">email: {{office.email}}</dd> <dd> Office Name: {{office.name}}</dd> <dd>Address: {{office.address}}</dd> <dl ng-repeat="role in repinfo.roles" ng-show="$first"> <dd>Term of Service: {{role.term | limitTo:4}} - {{role.term | limitTo:-4}}</dd> </dl> </dl> </dl> </div> </div> <!--End RepSearch//////////////////////////--> <!--End RepSearch//////////////////////////--> <div class="row marketing"> </div> </div>')}]);