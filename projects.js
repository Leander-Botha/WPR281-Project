// Create a new Project
function newProj() {
    // let projID = theProjects.length + 1;
	let nameP = document.getElementById("projName").value;
	let descriptionP = document.getElementById("projDetail").value;

    let project = {
        // id: projID,
        name: nameP,
        description: descriptionP
    }

    if (localStorage.getItem('theProjects') == null){
        let theProjects = [];
        theProjects.push(project);
        localStorage.setItem('theProjects', JSON.stringify(theProjects));
    }
    else{
        let theProjects = JSON.parse(localStorage.getItem('theProjects'));
        theProjects.push(project);
        localStorage.setItem('theProjects', JSON.stringify(theProjects));

    }

    resetForm();
}  


// Show All projects
function ShowProj() {
    document.getElementById("newProj").style.display="none"; 
    document.getElementById("showAll").style.display="block";
    
    let theProjects = JSON.parse(localStorage.getItem('theProjects'));
    for (let j = 0; j < theProjects.length; j++) {
        let Name = theProjects[j].name;
        let desc = theProjects[j].description;
        ShowAllProj(Name,desc)
        console.log()
    }
}

function ShowAllProj(Name,desc) {
    const divProj = document.getElementById("showAll");
    const newDiv = document.createElement("div");
    console.log("add");
    newDiv.classList.add("div-proj");
    divProj.appendChild(newDiv);
    newDiv.innerHTML = "<h1 >"+"Name: "+ Name+"</h1>"+"<br>"
        +"<p >"+"Summary: "+ desc +"</p>";
	
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
    resetForm();
}


