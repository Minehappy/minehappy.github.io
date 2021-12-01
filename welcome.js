firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "<h3> Hello, <br style=text-align:center;/>"+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
