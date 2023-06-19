// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChDWXNO2eDTUJUj1ECQKV6Ei8YH8GL7Ow",
    authDomain: "lets-chat-web-app-1764c.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-1764c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-1764c",
    storageBucket: "lets-chat-web-app-1764c.appspot.com",
    messagingSenderId: "1066121468399",
    appId: "1:1066121468399:web:5d477554772d99d3d07e1a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  //ADD YOUR FIREBASE LINKS HERE
  
  UserName = localStorage.getItem("User");
  document.getElementById("welcome_user").innerHTML = "Welcome " + UserName + " !";
  
  function logout() {
    window.location = "index.html";
    localStorage.removeItem("User");
  }
  
  function addRoom() {
    room_name = document.getElementById("RoomName_input").value;
    localStorage.setItem("Room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room"
    });
    document.getElementById("RoomName_input").value = "";
    window.location = "kwitter_page.html";
  }
  
  function getData() {
  
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name = " + Room_names);
        
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
  }
  getData();
  
  
  
  function redirectToRoomName(clicked_name) {
    console.log(clicked_name);
    localStorage.setItem("Room_name", clicked_name);
    window.location = "kwitter_page.html";
  
  } 