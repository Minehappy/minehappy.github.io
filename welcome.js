firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user")
    }
})


function logout(){
    firebase.auth().signOut()
    location.replace("Authentication.html")
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
