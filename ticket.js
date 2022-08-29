// initial populate dropdowns
let theCounter = 0;
function populateFormValues()
{
    theCounter++;
    if(theCounter> 1){
        document.getElementById("bugFounder").empty();
        document.getElementById("assignedEmployees").empty();
        document.getElementById("projectList").empty();
        document.getElementById("projectListFilter").empty();
    
    }

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

// filter tickets by project
function filterByProjects() {
    let filterProj = document.getElementById('projectListFilter').value;
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));

    document.getElementById("addNewTicket").style.display="none";
    document.getElementById("showAllTickets").style.display="none"; 
    document.getElementById("filterdTickets").style.display="block"; 
    document.getElementById("editTicketForm").style.display="none"; 
    

    let ticketList = document.getElementById('filterdTickets');
    for (let m = 0; m < ticketArray.length ; m++) {
        if (ticketArray[m].projectName == filterProj) {
            console.log(ticketArray[m])
            let id = ticketArray[m].id;
            let name = ticketArray[m].name;
            let projname = ticketArray[m].projectName;
            let summ = ticketArray[m].ticketSum;
            let priority = ticketArray[m].priority;
            let assignedTo = ticketArray[m].assignedTo;
            let status = ticketArray[m].status;
            let subDate = ticketArray[m].SubDate;
            let actualdate = ticketArray[m].actualdate;
            let founder = ticketArray[m].bugFounderList;
            
            ticketList.innerHTML += '<div class = "child-div" id="ticketDiv">' +
                                "<h6>Ticket ID: " + id + "</h6>" +
                                "<h1>Ticket name: " + name + "</h1>" + 
                                "<p> Status: " + status + "</p>" +
                                "<p> Project: " + projname + "</p>" +
                                "<p> Summary: " + summ + "<p>" +
                                "<p> Priority: " + priority + "</p>" +
                                "<p> Assigned to: " + assignedTo + "</p>" + 
                                "<p> Identified by to: " + founder + "</p>" + "</p>" + 
                                "<p> Submission Date: " + subDate + "</p>" + 
                                "<p> Resolved on: " + actualdate + "</p>" +
                                '<a href="#Detail-top" onclick = "ViewMoreDetails(\''+id+'\')" class = "btn btn-info">Details'+'</a>' + "     "+
                                '<button onclick = "EditTicket(\''+id+'\')" class = "btn btn-dark">Edit'+"</button>"  + "     " +
                                '<button id ="closeTicketbtn" onclick = "CloseTicket(\''+id+'\')" class = "btn btn-primary">Close' +"</button>" + "    " +
                                '<button onclick = "DeleteTicket(\''+id+'\')" class = "btn btn-danger">Delete'+"</button>" + "     " + 
                                '<button id ="openTicketbtn" onclick = "OpenTicket(\''+id+'\')" class = "btn btn-success">Re-Open'+"</button>" + "     " + 

                                '</div>';
        }   
    }    
}



// Create a ticket
function submitTicket() {

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
       ticketArray.unshift(ticket);
       localStorage.setItem('Tickets', JSON.stringify(ticketArray));
     }
     document.getElementById("ticketSubmitForm").reset();
     
 }
 document.getElementById("submitTicket").addEventListener("click",submitTicket);
 

// shows the create a bug div and hide the rest
function ShowAddNewTickets() {
    document.getElementById("addNewTicket").style.display="block";
    document.getElementById("showAllTickets").style.display="none"; 
    document.getElementById("filterdTickets").style.display="none"; 
    document.getElementById("editTicketForm").style.display="none"; 
}



// shows all the tickets
let clickCountTicket = 0;
function ShowAllTickets() {  
    clickCountTicket++;
    if(clickCountTicket> 1){
        while (document.getElementById('ticketDiv') != null )  {
            let removeDivs = document.getElementById('ticketDiv');
            removeDivs.remove();
        }
        
    }

    document.getElementById("addNewTicket").style.display="none";
    document.getElementById("showAllTickets").style.display="block"; 
    document.getElementById("filterdTickets").style.display="none";
    document.getElementById("editTicketForm").style.display="none"; 

   
    let tickets = JSON.parse(localStorage.getItem('Tickets'));
    
    let ticketList = document.getElementById('div-container');
    
    let openTicketbtn = document.getElementById("openTicketbtn");
    
    for (let i = 0; i < tickets.length; i++) {

      let id = tickets[i].id;
      let name = tickets[i].name;
      let projname = tickets[i].projectName;
      let summ = tickets[i].ticketSum;
      let priority = tickets[i].priority;
      let assignedTo = tickets[i].assignedTo;
      let status = tickets[i].status;
      let subDate = tickets[i].SubDate;
      let targdate = tickets[i].targdate;
      let actualdate = tickets[i].actualdate;
      let founder = tickets[i].bugFounderList;
      let resolvesumm = tickets[i].resolveSummary;
      let description = tickets[i].description;
      
      
      ticketList.innerHTML += '<div class = "child-div" id="ticketDiv">' +
                          "<h6>Ticket ID: " + id + "</h6>" +
                          "<h1>Ticket name: " + name + "</h1>" + 
                          "<p> Status: " + status + "</p>" +
                          "<p> Project: " + projname + "</p>" +
                          "<p> Summary: " + summ + "<p>" +
                          "<p> Priority: " + priority + "</p>" +
                          "<p> Assigned to: " + assignedTo + "</p>" + 
                          "<p> Identified by: " + founder + "</p>" + "</p>" + 
                          "<p> Submission Date: " + subDate + "</p>" + 
                          "<p> Resolved on: " + actualdate + "</p>" +
                          "<p> Description: " + description  + "</p>" +
                          "<p> Resolution Summary: " + resolvesumm + "</p>" +
                          '<button onclick = "EditTicket(\''+id+'\')" class = "btn btn-dark">Edit'+"</button>"  + "     " +
                          '<button id ="closeTicketbtn" onclick = "CloseTicket(\''+id+'\')" class = "btn btn-primary">Close' +"</button>" + "    " +
                          '<button id ="openTicketbtn" onclick = "OpenTicket(\''+id+'\')" class = "btn btn-success">Re-Open'+"</button>" + "     " + 
                          '<button onclick = "DeleteTicket(\''+id+'\')" class = "btn btn-danger">Delete'+"</button>"+
                           '</div>';

    }
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



function ShowSummary()
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));

    //document.getElementById("addNewTicket").style.display="none"; 

    //document.getElementById("div-container").style.display="none";

    
} 


function OpenTicket(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    let closeBtn = document.getElementById("closeTicketbtn");
    let openTicketbtn = document.getElementById("openTicketbtn");

    for (let i = 0; i < ticketArray.length; i++) 
    {
        if (ticketArray[i].id == ticketID)
        {
            ticketArray[i].status ="Open";
            ticketArray[i].actualdate = "Pending.....";
            closeBtn.disabled = "false";
            openTicketbtn.disabled = "true";
        }
    }
    console.log("Opened ticket");
    localStorage.setItem('Tickets', JSON.stringify(ticketArray));
    //$("#here").load(" #here > *");
}

function CloseTicket(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    let closedTicketArray = [];
    let closeBtn = document.getElementById("closeTicketbtn");
    let openTicketbtn = document.getElementById("openTicketbtn");
    for (let i = 0; i < ticketArray.length; i++) 
    {
        if (ticketArray[i].id == ticketID)
        {
            ticketArray[i].status ="Resolved";
            ticketArray[i].actualdate = new Date().toDateString();
            closeBtn.disabled = "true";
            openTicketbtn.disabled = "false";
            
            ticketArray[i].resolveSummary = prompt("Enter a resolution Summary");
            //Delete from original ticket array.
            DeleteTicket(ticketArray[i].id);
            closedTicketArray.unshift(ticketArray[i]);
        }
    }
    
    console.log("Closed ticket");
    localStorage.setItem('Closed Tickets', JSON.stringify(closedTicketArray));
    localStorage.setItem('Tickets', JSON.stringify(ticketArray));
    //$("#here").load(" #here > *");
    //location.reload();
}


function CloseTicketDetails()
{
    document.getElementById("ticketDetails").style.display="none";
}

function editTicket()
{
//contentEditable="true"   //maak dat jy op die input kan click en weer begin type maar ja 
//editing kon ek nog nie uitfigure nie maar dis iets 
    document.getElementById("addNewTicket").style.display="none";
    document.getElementById("showAllTickets").style.display="block"; 
    document.getElementById("filterdTickets").style.display="none";
    document.getElementById("editTicketForm").style.display="none"; 

}




