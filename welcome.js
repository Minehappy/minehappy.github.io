firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user")
    }
})


function logout(){
    location.replace("Authentication.html")
    firebase.auth().signOut()
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
