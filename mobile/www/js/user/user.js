angular.module('enki.user',[])

.controller('userController', function ($scope, $window, $location, User, $sce) {
  // console.log("ITEM: ", $window.localStorage.getItem('com.fickle'));
  var b = ['http://feedproxy.google.com/~r/kabbalahmedia/eng/~5/DuhUhjCB0ms/eng_t_rav_bs-ester-ve-gilui_2016-02-02_lesson.mp3',
  'http://www.podtrac.com/pts/redirect.mp3/media.devchat.tv/adventures-in-angular/AiA078NGBeta.mp3?rss=true',
  'http://techslides.com/demos/sample-videos/small.mp4'];
  var a = ["dog","cat"];
  $scope.likedResources = [];
  $scope.dislikedResources = [];
  // $scope.play = a[0];
  User.getUser($window.localStorage.getItem('com.fickle'))
  .then(function (user) {
  });

    User.getLikes($window.localStorage.getItem('com.fickle')).then(function(res) {
      $scope.likedResources = res;
      console.log("hey", res);
    });

  User.getDislike($window.localStorage.getItem('com.fickle')).then(function(data){
    $scope.dislikedResources = data;
    console.log("dislike", data);
  });

  $scope.changeSrc = function(num) {
    var audio = document.getElementById('audio');
    $scope.play = $sce.trustAsResourceUrl(b[num]);
    audio.load();
  };

});
