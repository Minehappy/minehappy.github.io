<<<<<<< HEAD
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
=======
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      setTimeout(function(){
        window.location.href = 'https://www.tutorialspoint.com/javascript/';
     }, 5000);
>>>>>>> parent of 87e187a (Test)

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
<<<<<<< HEAD
})
=======

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
      setTimeout(function(){
        window.location.href = 'https://www.tutorialspoint.com/javascript/';
     }, 5000);
  }
  });
>>>>>>> parent of 87e187a (Test)

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}