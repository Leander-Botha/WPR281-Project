// User login validation
	let adminUsername = "Admin";
	let adminPassword = "Admin123";

function checkUserLogin() {
	let username = document.getElementById("usernameLogin").value;
	let password = document.getElementById("userPassLogin").value;
	    if(username == adminUsername && password == adminPassword)
	    {
	        console.log("User login successful" + '…ᘛ⁐̤ᕐᐷ');
	        closeForm()
	    }
		else if (username != adminUsername && password != adminPassword)
	    {
            clearUserLogin()
	        alert("User login failed  incorrect username & password");
	        
	    }
	    else if (username == adminUsername && password != adminPassword)
	    {
            clearUserLogin()
	        alert("User login failed  incorrect password");
	        
	    }
	    else if (username != adminUsername && password == adminPassword)
	    {
	        clearUserLogin()
            alert("User login failed  incorrect username");
	        
	    }
                 

}

function clearUserLogin(){
    document.getElementById("username").value = '';
    document.getElementById("userPass").value = '';
}

    