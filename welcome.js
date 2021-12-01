firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, <br style=text-align:center; font-size:20vw;/>"+user
    }
})


function logout(){
    firebase.auth().signOut()
}

function announcements(){
    location.replace("Staff-Announcements.html")
}
