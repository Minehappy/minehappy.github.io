firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var user = firebase.auth().currentUser;

    if(user != null){
     var email_id = user.email;
     document.getElementById("user_hello")
    }

    } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    setTimeout(function(){
        window.location.href = 'https://www.robloxmemes.ml/';
     }, 5000);

  }
  });

  function login(){
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) 
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });

}