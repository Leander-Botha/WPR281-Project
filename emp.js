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
    ShowEmp();
    
}

let clickCountEMP = 0;
// Show All Emp
function ShowEmp() {
    clickCountEMP++;
    if(clickCountEMP > 1){
        while (document.getElementById('employeeDiv') != null )  {
            let removeDivs = document.getElementById("employeeDiv");
            removeDivs.remove();
        }
        
    }
    
	document.getElementById("addEmp").style.display="none"; 
    document.getElementById("empDetails").style.display="block";
	
    let theUsers = JSON.parse(localStorage.getItem('theUsers'))
	for (i=0; i<theUsers.length; i++)
	{
	    
	    AddNew(i);
	        
	}
	
	function AddNew(n) {
        //still busy
        document.getElementById('empDetails').innerHTML = "<tr> <th>" + theUsers[n].Username + "</th> <th>" +  theUsers[n].Name + "</th> <th>" +  theUsers[n].Name + "</th> </tr>"
                                                            
        // const DivContainer = document.getElementById("empDetails");
	    // const newDiv = document.createElement("div");
        // newDiv.id = 'employeeDiv'
	    // newDiv.classList.add("child-div");
	    // DivContainer.appendChild(newDiv);
	    // newDiv.innerHTML = "<h6><strong>"+"Username: "+ theUsers[n].Username +"</strong></h6>"+"<br>"
	    //                  +"Name: "+ theUsers[n].Name +"<br>"
	    //                 +"Surname: "+ theUsers[n].Surname +"<br>"
	    //                 +"Email: "+ theUsers[n].Email
	    //                 +"<br>"
	    //                 // +"<button>"+"click me"+"</button>";

        // document.getElementById('employeeDiv').style.margin = '1rem'
        // document.getElementById('employeeDiv').style.padding = '0rem'
      
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

