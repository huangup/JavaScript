var postParams = {
    method: 'POST',
    url: yourURLWS,
    transformRequest: angular.identity,
    uploadEventHandlers: {
        progress: function (e) {
                  if (e.lengthComputable) {
                     $scope.progressBar = (e.loaded / e.total) * 100;
                     $scope.progressCounter = $scope.progressBar;
                  }
        }
    },
    data: formData,
    headers: {'Content-Type': undefined }
};

var sendPost = $http(postParams);