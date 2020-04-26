// Application module
var IdentitasApp = angular.module('IdentitasApp',[]);
IdentitasApp.controller("IdentitasController",['$scope','$http', function($scope,$http){

	// ** Identitas ** /
	// Function to get identitas details from the database
	getIdentitas();
	function getIdentitas(){
		// Sending request to detailIdentitas.php files
		$http.post('../library/detailIdentitas.php').success(function(data){

		// Stored the returned data into scope
		$scope.details = data;
		});
	}

	$scope.uploadedFileInput=function(element){
		$scope.currentFile = element.files[0];
		var reader = new FileReader();

		reader.onload = function(event) {
		    var output = document.getElementById('output1');
    			output.src = URL.createObjectURL(element.files[0]);

		    $scope.image_source = event.target.result
		    $scope.$apply(function($scope) {
		        $scope.files = element.files;
		    });
		}
                    reader.readAsDataURL(element.files[0]);
	}

	// Update Data and Upload Image
	$scope.listIdentitas=[];
    $scope.files=[];
	$scope.UpdateIdentitas=function(info){
		$scope.favicon=$scope.files[0];

		$http({
				method:'POST',
				url:"../library/UpdateIdentitas.php",
				processData:false,
				transformRequest:function(data){
					var formData=new FormData();
					formData.append("id_identitas", info.id_identitas);
					formData.append("nama_pemilik", info.nama_pemilik);
					formData.append("judul_website", info.judul_website);
					formData.append("url", info.url);
					formData.append("meta_deskripsi", info.meta_deskripsi);
					formData.append("meta_keyword", info.meta_keyword);
					formData.append("alamat", info.alamat);
					formData.append("email", info.email);
					formData.append("telp", info.telp);
					formData.append("facebook", info.facebook);
					formData.append("google_map", info.google_map);
					formData.append("favicon", $scope.favicon);

			    return formData;
				return $scope.id_identitas;
				return $scope.nama_pemilik;
				return $scope.judul_website;
				return $scope.url;
				return $scope.meta_deskripsi;
				return $scope.meta_keyword;
				return $scope.alamat;
				return $scope.email;
				return $scope.telp;
				return $scope.facebook;
				return $scope.google_map;
			  },
			  data : $scope.listIdentitas,
			  headers: {
			         'Content-Type': undefined
			  }
		}).success(function(data){
		    $scope.show_form = true;
			if (data == true) {
				getIdentitas();
				$("#identitasModal").modal('hide');
			}
		    location.reload();
		});

	}

	$scope.updateMsg = function(id_identitas){
		$('#editIdentitas').css('display', 'none');
	}

	$scope.uploadedFile=function(element){
		$scope.currentFile = element.files[0];
		var reader = new FileReader();

		reader.onload = function(event) {
		    var output = document.getElementById('output2');
    			output.src = URL.createObjectURL(element.files[0]);

		    $scope.image_source = event.target.result
		    $scope.$apply(function($scope) {
		        $scope.files = element.files;
		    });
		}
                    reader.readAsDataURL(element.files[0]);
	}

	$scope.currentIdentitas = {};
	$scope.editIdentitas = function(info){
		$scope.currentIdentitas = info;
		$('#editIdentitas').modal(hide);
	}


	// ** Logout ** /
	$scope.logout = function(){
		//$http.post('../library/logout.php');
		window.location = 'http://localhost/angular';
	}

}]);
