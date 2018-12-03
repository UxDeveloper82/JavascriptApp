var app_FireBase = {};
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAesHDSpf8LEEnlObtB5h4QXlAq3agS01w",
    authDomain: "oshop-d90ae.firebaseapp.com",
    databaseURL: "https://oshop-d90ae.firebaseio.com",
    projectId: "oshop-d90ae",
    storageBucket: "oshop-d90ae.appspot.com",
    messagingSenderId: "933303167167"
  };
  firebase.initializeApp(config);
   
  app_FireBase = firebase;
})() 