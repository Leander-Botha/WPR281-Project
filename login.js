// User login validation
let Admin = 
    {
        username: "Admin",
        password: "Admin123"
    };

    

   

function checkUserLogin() {
	let username = document.getElementById("usernameLogin").value;
	let password = document.getElementById("userPassLogin").value;
	    if(username == Admin.username && password == Admin.password)
	    {
	        console.log("User login successful" + '…ᘛ⁐̤ᕐᐷ');
	        closeForm()
	    }
	    else if (username == Admin.username && password != Admin.password)
	    {
            clearUserLogin()
	        alert("User login failed  incorrect password");
	        
	    }
	    else if (username != Admin.username && password == Admin.password)
	    {
	        clearUserLogin()
            alert("User login failed  incorrect username");
	        
	    }
        else{
            clearUserLogin()
            alert("User login failed  incorrect username & password");
	        
        }
            

}

function clearUserLogin(){
    openForm()
    document.getElementById("username").value = '';
    document.getElementById("username").focus;
    document.getElementById("userPass").value = '';
}

    