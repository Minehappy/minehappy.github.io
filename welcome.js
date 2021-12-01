firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user")
        var useremail = +user.mail 
    }
})


function logout(){
    firebase.auth().signOut()
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
