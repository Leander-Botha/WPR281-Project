// User login validation
let Users = 
    {
        id: 1,
        name: 'Admin',
        surname: "Admin",
        email: 'Admin@gmail.com',
        username: "Admin123",
        password: "Admin123"
    };

    

   
    checkUserLogin();
    let btnSubmit = document.getElementById("login-btn");
    btnSubmit.addEventListener("click",checkUserLogin);
    function checkUserLogin() {

        let dieNaam = document.getElementById("username").value;
        let password = document.getElementById("userPass").value;
        if(dieNaam == users.username && password == users.password)
        {
            console.log("User login successful");
            alert('…ᘛ⁐̤ᕐᐷ')
        }
        else if (dieNaam == users.username && password != users.password)
        {
            console.log("User login failed  incorrect password");
        }
        else if (dieNaam != users.username && password == users.password)
        {
            console.log("User login failed  incorrect username");
        }
    }
    
