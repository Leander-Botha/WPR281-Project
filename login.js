// User login validation
let Admin = 
    {
        username: "Admin",
        password: "Admin123"
    };

    

   
let validLogin = false;
function checkUserLogin() {


	let username = document.getElementById("username").value;
	    let password = document.getElementById("userPass").value;
	    if(username == Admin.username && password == Admin.password)
	    {
	        console.log("User login successful" + '…ᘛ⁐̤ᕐᐷ');
	        validateLogin = true;
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

    