$(document).ready(function() {

    firebaseLoad();
    
})

function firebaseLoad() {
    
    var config = {
        apiKey: "AIzaSyAaE_SnPaqrh7nKCtwF2oS2B35VahiFx8M",
        authDomain: "nysl-app-56d07.firebaseapp.com",
        databaseURL: "https://nysl-app-56d07.firebaseio.com",
        projectId: "nysl-app-56d07",
        storageBucket: "nysl-app-56d07.appspot.com",
        messagingSenderId: "367776528120"
    };
    firebase.initializeApp(config);
    
}
console.log(firebaseLoad);