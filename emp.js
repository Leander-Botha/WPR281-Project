// Add new user
function AddUser() {
    
    // let len = users.length;
    // let userId = len +1;
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("userSurname").value;
    let userEMail = document.getElementById("userEMail").value;
    let username = document.getElementById("username").value;

    let newUser = {
        // Id : id,
        Name : firstName,
        Surname : surname,
        Email : userEMail,
        Username : username
    }

    if (localStorage.getItem('theUsers') == null){
        let theUsers = [];
        theUsers.push(newUser);
        localStorage.setItem('theUsers', JSON.stringify(theUsers));
    }
    else{
        let theUsers = JSON.parse(localStorage.getItem('theUsers'));
        theUsers.push(newUser);
        localStorage.setItem('theUsers', JSON.stringify(theUsers));

    }

    resetAddUser();
}


// Show All Emp
function ShowEmp() {
    
	document.getElementById("addEmp").style.display="none"; 
    document.getElementById("empDetails").style.display="block";
	
    let theUsers = JSON.parse(localStorage.getItem('theUsers'))
	for (i=0; i<theUsers.length; i++)
	{
	    
	    AddNew(i);
	        
	}
	
	function AddNew(n) {
        const DivContainer = document.getElementById("empDetails");
	    const newDiv = document.createElement("div");
	    newDiv.classList.add("divEMP");
	    DivContainer.appendChild(newDiv);
	    newDiv.innerHTML = "<h1 >"+"Username: "+ theUsers[n].Username +"</h1>"+"<br>"
	                     +"Name: "+ theUsers[n].Name +"<br>"
	                    +"Surname: "+ theUsers[n].Surname +"<br>"
	                    +"Email: "+ theUsers[n].Email
	                    +"<br>"
	                    // +"<button>"+"click me"+"</button>";
      
	}
	
}


// Reset inputs
function resetAddUser() {
    document.getElementById("firstName").value = '';
    document.getElementById("userSurname").value = '';
    document.getElementById("userEMail").value = '';
    document.getElementById("username").value = '';

} 

// Switch buttons
function NewUser() {
	document.getElementById("empDetails").style.display="none"; 
	document.getElementById("addEmp").style.display="block";
    resetAddUser();
}

