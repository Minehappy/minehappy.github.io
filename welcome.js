firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+"<br />" +user.email
    }
})


function logout(){
    firebase.auth().signOut()
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
