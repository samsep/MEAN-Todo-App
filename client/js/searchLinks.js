todoApp.controller('searchApparel', function($scope) {
  $scope.alreadySelected = false; // Whatever the default selected index is, use -1 for no selection
  $scope.changeClass = function () {
    $scope.alreadySelected = false;
    $scope.alreadySelected = true;
  }
});

// todoApp.controller('searchElectronics', function($scope) {
// //    $scope.alreadySelected = false; // Whatever the default selected index is, use -1 for no selection
//   $scope.alreadySelected = false; // Whatever the default selected index is, use -1 for no selection
//       $scope.changeClass = function () {
//         $scope.alreadySelected = false;
//         $scope.alreadySelected = true;
//       }
//     });

// todoApp.controller('searchHousehold', function($scope) {
// //    $scope.alreadySelected = false; // Whatever the default selected index is, use -1 for no selection
//   $scope.alreadySelected = false; // Whatever the default selected index is, use -1 for no selection
//        $scope.changeClass = function () {
//          $scope.alreadySelected = false;
//          $scope.alreadySelected = true;
//        }
//      });

// todoApp.controller('houseCtrl', function($rootScope, $scope, todosFactory) {