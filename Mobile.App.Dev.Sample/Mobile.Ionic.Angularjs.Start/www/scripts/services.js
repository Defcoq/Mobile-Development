angular.module('starter.services', [])
.factory('Log', ["$window", function ($window) {

    //init objects and methods
    var log = [];
    var storageKey = "appMyRunMyRide";

    //load from local storage
    var loadFromStorage = function () {
        return angular.fromJson($window.localStorage.getItem(storageKey)) || [];
    };

    //save all to local storage
    var saveToStorage = function (items) {
        $window.localStorage.setItem(storageKey, angular.toJson(items));
    }

    //define services
    return {

        //get all items from storage
        all: function () {
            return loadFromStorage();
        },

        //add an item to storage and save
        addItem: function (item) {
            var items = loadFromStorage();
            items.push(item);
            saveToStorage(items);
        },

        //delete the local storage and save
        clear: function () {
            var items = loadFromStorage();
            items.splice(0, items.length);
            saveToStorage(items);
        }
    };

}])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
