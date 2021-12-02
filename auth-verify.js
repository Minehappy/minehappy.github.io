firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("welcome.html")
    }else{
        setTimeout(function(){
            document.getElementById("user");
         }, 3000);
    }
})