firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        setTimeout(function(){
            location.replace("Authentication.html")
         }, 3000);
    }else{
        setTimeout(function(){
            document.getElementById("user");
         }, 3000);
    }
})