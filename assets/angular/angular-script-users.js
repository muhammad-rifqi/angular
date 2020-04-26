// Application module users
var UsersApp = angular.module('UsersApp',[]);
UsersApp.controller("UsersController",['$scope','$http', function($scope,$http){

	getUsers();
	function getUsers(){
		$http.post('../library/detailUsers.php').success(function(data){
		$scope.details = data;
		});
	}

	$scope.currentUsers = {};
	$scope.editUsers = function(info){
		$scope.currentUsers = info;
		$('#editUsers').modal(hide);
	}

$scope.deleteUsers = function(info){
	console.log(info);
	$http.post('../library/deleteUser.php',{"id":info.id}).success(function(data){
		if (data == true) {
			getUsers();
			$('#employeeModal').modal(hide);
		}
	});
	location.reload();
}


	$scope.UpdateUsers = function(info){
		$http.post('../library/update.php',{
														"username":info.username,
														"firstname":info.firstname,
														"lastname":info.lastname,
														"email":info.email,
														"birthdate":info.birthdate,
														"basicsalary":info.basicsalary,
														"status":info.status,
														"group":info.group,
														"id":info.id
												}).success(function(data){
		$scope.show_form = true;
			if (data == true) {
				getUsers();
				$("#usersModal").modal('hide');
			}
		});
		location.reload();
	}

	$scope.updateMsg = function(id){
		$('#editUsers').css('display', 'none');
	}


	// ** Logout ** /
	$scope.logout = function(){
		//$http.post('../library/logout.php');
		window.location = 'http://localhost/angular';
	}


		$scope.insertEmployee = function(){
			$http.post('../library/insert.php',{
				"username":$scope.username,
				"firstname":$scope.firstname,
				"lastname":$scope.lastname,
				"email":$scope.email,
				"birthdate":$scope.birthdate,
				"basicsalary":$scope.basicsalary,
				"status":$scope.status,
				"group":$scope.group
			}).success(function(data){
				if(data == true){
					getUsers();
					$("#usersModal").modal('hide');
				}
					location.reload();

			});

		}


}]);
