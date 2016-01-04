angular.module('starter.controllers', [])

.controller('CalculateCtrl', function ($scope, $ionicPopup, Log) {

    //define overall scope
    $scope.entry = { distance: '', time: '' };
    $scope.pace = '';

    $scope.calculatePace = function () {
        $scope.pace = '';
        document.getElementById('paceDisplay').style.display = 'none';

        //get data from .entry and calculate
        var pace = ($scope.entry.time / $scope.entry.distance);

        //if a number, show results
        if (!isNaN(parseFloat(pace)) && isFinite(pace)) {
            $scope.pace = pace.toFixed(2);
            document.getElementById('paceDisplay').style.display = 'block';
        }
    };

    $scope.addEntry = function () {
        //add the item to the log scope
        var item = {
            date: (new Date().toDateString()),
            data: 'Distance: ' + $scope.entry.distance +
                ', Time: ' + $scope.entry.time +
                ', Pace: ' + $scope.pace
        };

        Log.addItem(item);

        //clear form, show success
        $scope.pace = '';
        $scope.entry = { distance: '', time: '' };
        document.getElementById('paceDisplay').style.display = 'none';
        $scope.showAlert();

    };

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'My Run / My Ride',
            template: 'Item saved to log!'
        });
    };
})
.controller('AboutCtrl', function ($scope) { })
.controller('LogCtrl', function ($scope) {
    $scope.logItems = Log.all();

    $scope.clear = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'My Run / My Ride',
            template: 'Are you sure you want to clear your entire log?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                //clear the log
                $scope.logItems = Log.clear();
            } else {
                //do nothing
            }
        });
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
