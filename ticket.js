// initial populate dropdowns
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



// create a ticket
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
 

// shows the create a bug div and hide the rest
function ShowAddNewTickets() {
    document.getElementById("addNewTicket").style.display="block";
    document.getElementById("showAllTickets").style.display="none"; 
    document.getElementById("filterdTickets").style.display="none"; 
    document.getElementById("editTicketForm").style.display="none"; 
}




// shows all the tickets
let clickCountTicket = 0;
function ShowAllTickets() 
{

    clickCountTicket++;
    if(clickCountTicket> 1)
    {
        while (document.getElementById('ticketDiv') != null )  
        {
            let removeDivs = document.getElementById('ticketDiv');
            removeDivs.remove();
        }
        
    }

    document.getElementById("addNewTicket").style.display="none";
    document.getElementById("showAllTickets").style.display="block"; 
    document.getElementById("filterdTickets").style.display="none";
    document.getElementById("editTicketForm").style.display="none"; 

   
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));
    
    let ticketList = document.getElementById('div-container');
    
    let openTicketbtn = document.getElementById("openTicketbtn");
    

      
      for (let i = 0; i < ticketArray.length; i++) 
    {

        let id = ticketArray[i].id;
        let name = ticketArray[i].name;
        let projname = ticketArray[i].projectName;
        let summ = ticketArray[i].ticketSum;
        let priority = ticketArray[i].priority;
        let assignedTo = ticketArray[i].assignedTo;
        let status = ticketArray[i].status;
        let subDate = ticketArray[i].SubDate;
        let actualdate = ticketArray[i].actualdate;
        let founder = ticketArray[i].bugFounderList;
        let description = ticketArray[i].description;
        let detailresolsum = ticketArray[i].resolveSummary;
  
        ticketList.innerHTML +=  
                            '<div id ="child-divID" class = "child-div">' +
  
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
  
                            '<div id ="details-div" class="details-div">' +
                            
                            "<p> Description: " + description + "<p>" +
                            "<p> Resolution Summary: " + detailresolsum + "</p>" 
                            
                            +"</div>"+
                            '<button onclick = "ViewMoreDetails(\''+id+'\')" class = "btn btn-info">Details'+'</button>' + "     "+
                            '<button onclick = "EditTicket(\''+id+'\')" class = "btn btn-dark">Edit'+"</button>"  + "     " +
                            '<button id ="closeTicketbtn" onclick = "CloseTicket(\''+id+'\')" class = "btn btn-primary">Close' +"</button>" + "    " +
                            '<button onclick = "DeleteTicket(\''+id+'\')" class = "btn btn-danger">Delete'+"</button>" + "     " + 
                            '<button id ="openTicketbtn" onclick = "OpenTicket(\''+id+'\')" class = "btn btn-success">Re-Open'+"</button>" + "     " + 
  
                             '</div>';
  
          document.getElementById("details-div").setAttribute("id",id);
    }

}
function ViewMoreDetails(ticketID)
{
    let detailsDiv = document.getElementsByClassName("details-div");
    let ticketArray = JSON.parse(localStorage.getItem("Tickets"));


  
    for (let i = 0; i < ticketArray.length; i++) 
    {   for(let j =0; j <detailsDiv.length; j++)
        {
            if (ticketArray[i].id == detailsDiv[j].id)
            {

            }
        }

    }
    //document.getElementById("addNewTicket").style.display="none"; 
  
    //document.getElementById("div-container").style.display="none";
  
    
        
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
    ShowAllTickets();
    console.log("Deleted: " + ticketID)
}
<<<<<<< HEAD

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

function ViewMoreDetails(ticketID)
{
    let ticketArray = JSON.parse(localStorage.getItem('Tickets'));

    //document.getElementById("addNewTicket").style.display="none"; 

    //document.getElementById("div-container").style.display="none";





        let childDiv = document.getElementById("child-div");
        let ticketList = document.getElementById('div-container');




        
      let id = ticketArray[i].id;
      let name = ticketArray[i].name;
      let projname = ticketArray[i].projectName;
      let summ = ticketArray[i].ticketSum;
      let priority = ticketArray[i].priority;
      let assignedTo = ticketArray[i].assignedTo;
      let founder = ticketArray[i].bugFounderList;
      let description = ticketArray[i].description;
      let status = ticketArray[i].status;
      let subDate = ticketArray[i].SubDate;
      let actualdate = ticketArray[i].actualdate;
      let detailresolsum = ticketArray[i].resolveSummary;

      ticketList.innerHTML += '<div class = "child-div">' +
        "<h6>Ticket ID: " + id + "</h6>" +
        "<h1>Ticket name: " + name + "</h1>" + 
        "<p> Status: " + status + "</p>" +
        "<p> Project: " + projname + "</p>" +
        "<p> Summary: " + summ + "<p>" +
        "<p> Description: " + description + "<p>" +
        "<p> Priority: " + priority + "</p>" +
        "<p> Assigned to: " + assignedTo + "</p>" + 
        "<p> Identified by to: " + founder + "</p>" + "</p>" + 
        "<p> Submission Date: " + subDate + "</p>" + 
        "<p> Resolved on: " + actualdate + "</p>" +
        "<p> Resolution Summary: " + detailresolsum + "</p>" +
        '<a onclick = "ViewMoreDetails(\''+id+'\')" class = "btn btn-info">Details'+'</a>' + "     "+
        '<button onclick = "EditTicket(\''+id+'\')" class = "btn btn-dark">Edit'+"</button>"  + "     " +
        '<button onclick = "CloseTicket(\''+id+'\')" class = "btn btn-primary">Close' +"</button>" + "    " +
        '<button onclick = "DeleteTicket(\''+id+'\')" class = "btn btn-danger">Delete'+"</button>" + "     " + 
        '<button onclick = "OpenTicket(\''+id+'\')" class = "btn btn-primary2">Re Open'+"</button>" + "     " + 

         '</div>';  
      
      
    
} 
=======
>>>>>>> 3f0eb2d18bbc40aa74f3a243eabd85a44c4a1266


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
        }
    }
    console.log("Closed ticket");
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




