let theProjects = [
    {
        name: "Pick n Pay",
        description: "Website revamp"
    },
    {
        name: "Pieter Property",
        description: "New website for Pieters properties"
    }

]


// Show All projects
function ShowProj() {
    document.getElementById("newProj").style.display="none"; 
    document.getElementById("showAll").style.display="block";
    
    for (let j = 0; j < theProjects.length; j++) {
        let Name = theProjects[j].name;
        let desc = theProjects[j].description;
        ShowAllProj(Name,desc)
        
    }
    

}

        function ShowAllProj(Name,desc) {
            const divProj = document.getElementById("showAll");
	        const newDiv = document.createElement("div");
	        console.log("add");
	        newDiv.classList.add("div-proj");
	        divProj.appendChild(newDiv);
	        newDiv.innerHTML = "<h1 >"+"Name: "+ Name+"</h1>"+"<br>"
	                        +"Summary: "+ desc;
	
        }


// Create a new Project
function newProj() {
    // Add id to project
	// let len = users.length;
    // let userId = len +1;
    function Project(name,description){
        
        this.name = name;
        this.desscription = description; 
    }
    let nameP = document.getElementById("projName").value;
	let descriptionP = document.getElementById("projDetail").value;
    let newProject = new Project(nameP,descriptionP);
    theProjects.push(newProject);
    AddNewProj(nameP,descriptionP);
    localStorage.setItem("theProjects", JSON.stringify(theProjects))

	console.log(nameP,descriptionP)
}  


function AddNewProj(Name,desc) {
    const divProj = document.getElementById("newProj");
    const newDiv = document.createElement("div");
    console.log("add");
    newDiv.classList.add("div-proj");
    divProj.appendChild(newDiv);
    newDiv.innerHTML = "<h1 >"+"Name: "+ Name+"</h1>"+"<br>"
                      +"Summary: "+ desc;
    resetForm();

  }




// Reset inputs
function resetForm() {
    document.getElementById("projName").value = "";
    document.getElementById("projDetail").value = "";
   

} 


// Switch between divs
function createProj(){
    document.getElementById("showAll").style.display="none"; 
    document.getElementById("newProj").style.display="block";
}


