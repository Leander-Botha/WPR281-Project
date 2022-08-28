
let users = [
    {
        id: 1,
        name: 'John',
        surname: "Cena",
        email: 'john@gmail.com',
        username: "Squiggly puff"
        },
        {id: 2,
        name: 'Koos',
        surname: "Visagie",
        email: '123@gmail.com',
        username: "Sookie"
        },
        {
        id: 3,
        name: 'Zander',
        surname: "HaasBroek",
        email: 'haas@gmail.com',
        username: "Vet Haas"
        }

]
    
// Show All Emp
function ShowEmp() {
    
	document.getElementById("addEmp").style.display="none"; 
    document.getElementById("empDetails").style.display="block";
	
    
	for (i=0; i<users.length; i++)
	{
	    console.log(users[i].id);
	    console.log(users[i].name);
	    AddNew(i);
	        
	}
	
	function AddNew(n) {
        const DivContainer = document.getElementById("empDetails");
	    const newDiv = document.createElement("div");
	    newDiv.classList.add("divEMP");
	    DivContainer.appendChild(newDiv);
	    newDiv.innerHTML = "<h1 >"+"Username: "+ users[n].username +"</h1>"+"<br>"
	                     +"Name: "+ users[n].name +"<br>"
	                    +"Surname: "+ users[n].surname +"<br>"
	                    +"Email: "+ users[n].email
	                    +"<br>"
	                    +"<button>"+"click me"+"</button>";
      
	}
	
}



// Add new user
function AddUser() {
    const DivContainer = document.getElementById("empDetails");
      
    function User(id,name,surname,email,username)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.username = username;
    }
    
    let len = users.length;
    let userId = len +1;
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("userSurname").value;
    let userEMail = document.getElementById("userEMail").value;
    let username = document.getElementById("username").value;

    let newUser = new User(userId,firstName,surname, userEMail, username);
    console.log(newUser);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    resetAddUser();
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


function populateFormUsers()
{
    const bugFounderList = document.getElementById("bugFounder");
    const employeeList = document.getElementById("assignedEmployees");

    for(const User of users)
    {   
        let option = document.createElement("option");    
        option.value = User.name;
        option.innerHTML = User.name;
        bugFounderList.appendChild(option);
    }

    for(const User of users)
    {   
        let option = document.createElement("option");    
        option.value = User.name;
        option.innerHTML = User.name;
        employeeList.appendChild(option);
    }
 
}

// ----------------------- Running functions on website startup ------------------------

populateFormUsers();