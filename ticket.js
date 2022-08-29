
function populateFormValues()
{
    const bugFounderList = document.getElementById("bugFounder");
    const employeeList = document.getElementById("assignedEmployees");
    const projectList = document.getElementById("projectList");
    const projectListFilter = document.getElementById("projectListFilter");

    let theUsers = JSON.parse(localStorage.getItem('theUsers'));
    let theProjects = JSON.parse(localStorage.getItem('theProjects'));

    for(const newUser of theUsers)
    {   
        let option = document.createElement("option");    
        option.value = newUser.Name;
        option.innerHTML = newUser.Name;
        bugFounderList.appendChild(option);
    }

    for(const newUser of theUsers)
    {
        let option = document.createElement("option");    
        option.value = newUser.Name;
        option.innerHTML = newUser.Name;
        employeeList.appendChild(option);
    }

    for(const project of theProjects)
    {
        let option = document.createElement("option");    
        option.value = project.name;
        option.innerHTML = project.name;
        projectList.appendChild(option);
    }
    for(const project of theProjects)
    {
        let option = document.createElement("option");    
        option.value = project.name;
        option.innerHTML = project.name;
        projectListFilter.appendChild(option);
    }
    
}

function filterByProjects() {
    let filterProj = document.getElementById('projectListFilter').value;
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));

    for (let m = 0; m < ticketArray.length ; m++) {
        if (ticketArray[m].projectName == filterProj) {
            console.log(ticketArray[m])
        }
        
    }

    
}



// create a ticket
function ShowAddNewTickets(){
    //document.getElementById("div-container").style.display="none"; 
   //document.getElementById("addNewTicket").style.display="block";
   //fetchTickets();
    
}



function submitTicket() {
    // let CurrentDay = new Date();
     let ticketID = document.getElementById("ticketID").value;
     let name = document.getElementById("ticketName").value;
     let projectName = document.getElementById("projectList").value;
     let AssignedEmp = document.getElementById("assignedEmployees").value;
     let ticketdescription = document.getElementById("ticketdescription").value;
     let ticketPriority = document.getElementById("ticketPriority").value;
     let targdate = document.getElementById("targdate").value;
     let ticketSubmitDate =  new Date().toDateString();
     let bugFounder = document.getElementById("bugFounder").value;
     //let actdate = document.getElementById("actualdate").value;
     //let resolsum = document.getElementById("resolsummary").value;
     let ticketSum = document.getElementById("ticketSum").value;
     let status;
     
     let ticket = {
       id: ticketID,
       name: name,
       projectName: projectName,
       description: ticketdescription,
       assignedTo: AssignedEmp,
       priority: ticketPriority,
       SubDate: ticketSubmitDate,
       Founder: bugFounder,
       actualdate: "Pending",
       targdate:targdate, //Display in ticket summary also.
       resolveSummary : "",
       ticketSum: ticketSum,
       status: "Open"
     }
      
     if (localStorage.getItem('Tickets') == null) {
         let ticketArray = [];
         ticketArray.push(ticket);
         localStorage.setItem('Tickets', JSON.stringify(ticketArray));    
     }
     else {
       let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
       ticketArray.push(ticket);
       localStorage.setItem('Tickets', JSON.stringify(ticketArray));
     }
     document.getElementById("ticketSubmitForm").reset();
 }
 document.getElementById("submitTicket").addEventListener("click",submitTicket);
 


 function ShowAllTickets() {
    let tickets = JSON.parse(localStorage.getItem('Tickets'));
    
    let ticketList = document.getElementById('div-container');
    

    
    for (let i = 0; i < tickets.length; i++) {
      let id = tickets[i].id;
      let name = tickets[i].name;
      let summ = tickets[i].ticketSum;
      let priority = tickets[i].priority;
      let assignedTo = tickets[i].assignedTo;
      let status = tickets[i].status;
      let subDate = tickets[i].SubDate;
      let actualdate = tickets[i].actualdate;
      
      ticketList.innerHTML += '<div class = "child-div">' +
                          "<h6>Ticket ID: " + id + "</h6>" +
                          "<h1>Ticket name: " + name + "</h1>" + 
                          "<p> Status: " + status + "</p>" +
                          "<p> Summary: " + summ + "</h3>" +
                          "<p> Priority: " + priority + "</p>" +
                          "<p> Assigned to: " + assignedTo + "</p>" + 
                          "<p> Submission Date: " + subDate + "</p>" + 
                          "<p> Resolved on: " + actualdate + "</p>" +
                          '<a href="#Detail-top" onclick = "ViewMoreDetails(\''+id+'\')" class = "btn btn-info">Details'+'</a>' + "     "+
                          '<button onclick = "EditTicket(\''+id+'\')" class = "btn btn-dark">Edit'+"</button>"  + "     " +
                          '<button onclick = "CloseTicket(\''+id+'\')" class = "btn btn-primary">Close' +"</button>" + "    " +
                          '<button onclick = "DeleteTicket(\''+id+'\')" class = "btn btn-danger">Delete'+"</button>" + "     " + 
                          '<button onclick = "OpenTicket(\''+id+'\')" class = "btn btn-primary2">Open'+"</button>" + "     " + 

                           '</div>';
    }
  }

function viewMoreDetails() 
{
 console.log("More details were shown");
}


function DeleteTicket(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    for(let i=0; i<ticketArray.length; i++) 
    {
        if(ticketArray[i].id == ticketID)
        {
            ticketArray.splice(i,1);
        }
    }
    localStorage.setItem('Tickets', JSON.stringify(ticketArray)); 
    window.location.reload(true);
    console.log("Deleted: " + ticketID)
}
// filter on click
/*document.getElementById("projectListFilter").onchange = function()
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    for(let i=0; i<ticketArray.length; i++) 
    {
        if(ticketArray[i].projectName==this.value)
        {
            console.log("yes");//hy log actually yes so
                                // hy kan sien hoeveel tickets daai project het maar ek weni hoe ek sal kan display nie
        }
    }
    
};*/

// Display ticket on click

// Show all tickets
/*function ShowAllTickets(){

    populateFormValues()
    document.getElementById("addNewTicket").style.display="none"; 
    document.getElementById("showAllTickets").style.display="block";

    const DivContainer = document.getElementById("div-container");

    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    
    console.log(ticketArray);

    for(let i = 0; i < ticketArray.length; i++)
    {

        const newTkt = document.createElement("div");
        const newTktName = document.createElement("h1");
        const newTktProjName = document.createElement("h2");
        const newTktSumm = document.createElement("p");
        const newTktPrio = document.createElement("p");
        const newtTktAssign = document.createElement("p");
        const newTktType = document.createElement("p");
        const newTktSubDate = document.createElement("p");

        const newTktMoreDetailsBtn = document.createElement("button");

        newTkt.classList.add("child-div");
        newTktName.classList.add("tktName");
        newTktSumm.classList.add("tktSummary");
        newTktPrio.classList.add("tktPriority");
        newTktType.classList.add("tktType");
        newtTktAssign.classList.add("tktAssign")
        newTktSubDate.classList.add("tktSubDate");

        newTkt.appendChild(newTktName);
        newTkt.appendChild(newTktProjName);
        newTkt.appendChild(newTktSumm);
        newTkt.appendChild(newTktPrio);
        newTkt.appendChild(newtTktAssign);
        newTkt.appendChild(newTktType);
        newTkt.appendChild(newTktSubDate);
        newTkt.appendChild(newTktMoreDetailsBtn);

        newTktName.innerHTML = ticketArray[i].name;
        newTktProjName.innerHTML = ticketArray[i].projectName;
        newTktSumm.innerHTML = ticketArray[i].ticketSum;
        newTktPrio.innerHTML = ticketArray[i].priority;
        newtTktAssign.innerHTML = ticketArray[i].assignedTo;
        newTktType.innerHTML = ticketArray[i].status;
        newTktSubDate.innerHTML = ticketArray[i].SubDate;


        
        newTktMoreDetailsBtn.id = "tktMoreDetailsBtn";
        // Add open and close and delete buttons.
        newTktMoreDetailsBtn.innerHTML = "View more details";
        DivContainer.appendChild(newTkt);


    }
    console.log("HELLO")

    
}*/

function ViewMoreDetails()
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));

    document.getElementById("ticketDetails").style.display="block";
    document.getElementById("addNewTicket").style.display="none"; 

    //document.getElementById("div-container").style.display="none";




        for(let i = 0; i < ticketArray.length; i++)
        {   

        const DetailTktID = document.getElementById("ticketID")
        const DetailTktName = document.getElementById("ticketTitle");
        const DetailProjName = document.getElementById("projectName");
        const DetailIdentifiedby = document.getElementById("identifiedBy");
        const DetailAssign = document.getElementById("assignedEmp");
        const DetailPrio = document.getElementById("detpriority");
        const DetailType = document.getElementById("dettype");
        const DetailDesc = document.getElementById("ticketDescription");
        const DetailDateIdent = document.getElementById("dateIdenfiied");
        const DetailTargDate = document.getElementById("trgtResolutionDate");
        const DetailActDate = document.getElementById("actResolutionDate");
        const DetailResolSum = document.getElementById("resolSummary");

        const listAssingedEmp = document.getElementById("lstassignedEmp");
               DetailTktID.innerHTML = ticketArray[i].id
               DetailTktName.innerHTML = ticketArray[i].name;
               DetailProjName.innerHTML = ticketArray[i].projectName;
               DetailIdentifiedby.innerHTML = ticketArray[i].Founder;
               DetailAssign.innerHTML = ticketArray[i].assignedTo;
               DetailPrio.innerHTML = ticketArray[i].priority;
               DetailType.innerHTML = ticketArray[i].status;
               DetailDesc.innerHTML = ticketArray[i].description;
               DetailDateIdent.innerHTML = ticketArray[i].subDate;
               DetailTargDate.innerHTML = ticketArray[i].targdate;
               DetailActDate.innerHTML = ticketArray[i].actualdate;
               DetailResolSum.innerHTML = ticketArray[i].resolsum;

               for(const User of users)
               {
                   let option = document.createElement("option");    
                   option.value = User.name;
                   option.innerHTML = User.name;
                   listAssingedEmp.appendChild(option);
               }
        }     
} 


function OpenTicket(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    for (let i = 0; i < ticketArray.length; i++) 
    {
        if (ticketArray[i].id == ticketID)
        {
            ticketArray[i].status ="Open";
            ticketArray[i].actualdate = "Pending.....";
        }
    }
    console.log("opened");
    localStorage.setItem('Tickets', JSON.stringify(ticketArray));
    $("#here").load(" #here > *");
}

function CloseTicket(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    for (let i = 0; i < ticketArray.length; i++) 
    {
        if (ticketArray[i].id == ticketID)
        {
            ticketArray[i].status ="Resolved";
            ticketArray[i].actualdate = new Date().toDateString();
        }
    }
    console.log("Closed");
    localStorage.setItem('Tickets', JSON.stringify(ticketArray));
    location.reload();
}


function CloseTicketDetails()
{
    document.getElementById("ticketDetails").style.display="none";
}

function editTicket()
{
//contentEditable="true"   //maak dat jy op die input kan click en weer begin type maar ja 
//editing kon ek nog nie uitfigure nie maar dis iets 
}




