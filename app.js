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

//Reference messages collection
var messagesRef = firebase.database().ref('messages');
  

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit Form
function submitForm(e){
  e.preventDefault();

  //Get Values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  //Save Message
  saveMessage(name, company, email, phone, message);
}


//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message 
    });
}