firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        setTimeout(function(){
            location.replace("Authentication.html")
         }, 3000);
    }else{
        setTimeout(function(){
            location.replace("welcome.html")
         }, 3000);
    }
})