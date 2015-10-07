var userInfoModule=angular.module("UserInfoModule", []);
userInfoModule.controller("UserInfoCtrl", ["$scope", function($scope){
	$scope.userInfo={
		email:"bwang2009@yeah.net",
		password:"123456",
		autoLogin:true
	};
	$scope.getFormData=function(){
		console.log($scope.userInfo);
	}
}])
