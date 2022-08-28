
function populateFormValues()
{
    const bugFounderList = document.getElementById("bugFounder");
    const employeeList = document.getElementById("assignedEmployees");
    const projectList = document.getElementById("projectList");

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
     let ticketSubmitDate =  new Date().toDateString;
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
       SubDate: new Date().toDateString(),
       Founder: bugFounder,
       actualdate: "",
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
 


 function fetchTickets() {
    let tickets = JSON.parse(localStorage.getItem('Tickets'));
    
    let ticketList = document.getElementById('div-container');
    
    ticketList.innerHTML ='';
    
    for (let i = 0; i < tickets.length; i++) {
      let id = tickets[i].id;
      let name = tickets[i].name;
      let desc = tickets[i].description;
      let priority = tickets[i].priority;
      let assignedTo = tickets[i].assignedTo;
      let status = tickets[i].status;
      let subDate = tickets[i].subDate;
      
      ticketList.innerHTML += '<div class = "well">' +
                          '<h6>Issue name: ' + name + '</h6>' + 
                          '<p><span class = "label label-info">' + status + '</span></p>' +
                          '<h3>' + desc + '</h3>' +
                          '<p><span></span> ' + priority + '</p>' +
                          '<p><span></span> ' + assignedTo + '</p>' + 
                          '<p><span></span> ' + subDate + '</p>' + 
                          '<a href = "#" onclick = "CloseTicket(\''+id+'\')" class = "btn btn-warning">Close</a> ' +
                          '<a href = "#" onclick = "deleteTicket(\''+id+'\')" class = "btn btn-danger">Delete</a>' +
                           '</div>';
    }
   // document.getElementById("div-container").style.display="block-inline"; 
  }


// Display ticket on click
/*function DisplayTicket(ticketArray)
{
    const DivContainer = document.getElementById("div-container");
    const newTkt = document.createElement("div");
    // Add projectID/Name to display.
    const newTktName = document.createElement("h1");
    const newTktSumm = document.createElement("p");
    const newTktPrio = document.createElement("select");
    const newtTktAssign = document.createElement("select");
    const newTktType = document.createElement("select");
    const newTktDate = document.createElement("p");
    
    const newTktMoreDetailsBtn = document.createElement("button");

     console.log("add");

     newTkt.classList.add("child-div");


     DivContainer.appendChild(newTkt);

     newTkt.appendChild(newTktName);
     newTkt.appendChild(newTktSumm);
     newTkt.appendChild(newTktPrio);
     newTkt.appendChild(newtTktAssign);
     newTkt.appendChild(newTktType);
     newTkt.appendChild(newTktDate);
     newTkt.appendChild(newTktMoreDetailsBtn);

     //newTkt.addEventListener("click",viewTicket);
   

     newTktName.classList.add("tktName");
     newTktSumm.classList.add("tktSummary");
     newTktPrio.classList.add("tktPriority");
     newTktType.classList.add("tktType");
     newtTktAssign.classList.add("tktAssign")
     newTktDate.classList.add("tktDate");

     //newTktMoreDetailsBtn.setAttribute("id","tktMoreDetailsBtn");
     newTktMoreDetailsBtn.id = "tktMoreDetailsBtn";
     // Add open and close buttons.
     newTktMoreDetailsBtn.innerHTML = "View more details";


     newTkt.id = click;
     click++;

     for(let i = 0; i < ticketArray.length; i++)
     {   
        if(newTkt.id == ticketArray[i].id)
        {
            newTktName.innerHTML = ticketArray[i].name;
            newTktSumm.innerHTML = ticketArray[i].summ;
            newTktPrio.innerHTML = ticketArray[i].prio;
            newtTktAssign.innerHTML = ticketArray[i].assignedTo;
            newTktType.innerHTML = ticketArray[i].type;
            newTktDate.innerHTML = ticketArray[i].date;
        
        } 
        /*else if(click > tickets.length-1)
        {
             BtnAdd.disabled = true; 
        }*/


     /*}

     newTktMoreDetailsBtn.addEventListener("click", DisplayTicketDetails)

     console.log("Printed from display function: ");
     console.log(ticketArray);
}*/
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

function DisplayTicketDetails()
{
    document.getElementById("ticketDetails").style.display="block";
    document.getElementById("addNewTicket").style.display="none"; 
    const addNewTicketBtn = document.createElement("addNewTicketBtn");

    //document.getElementById("div-container").style.display="none";

   const DetailTktName = document.getElementById("ticketTitle");
   const DetailProjName = document.getElementById("projectName");
   const DetailIdentifiedby = document.getElementById("identifiedBy");
   const DetailAssign = document.getElementById("lstassignedEmp");
   const DetailPrio = document.getElementById("detpriority");
   const DetailType = document.getElementById("dettype");
   const DetailDesc = document.getElementById("ticketDescription");
   const DetailDateIdent = document.getElementById("dateIdenfiied");
   const DetailTargDate = document.getElementById("trgtResolutionDate");
   const DetailActDate = document.getElementById("actResolutionDate");
   const DetailResolSum = document.getElementById("resolSummary");

   const listAssingedEmp = document.getElementById("lstassignedEmp");

   addEventListener('click', function(event)
   {
    if(event.target.id !== '')
    {
        for(let i = 0; i < ticketArray.length; i++)
        {   
           if(event.target.parentElement.id == ticketArray[i].id)
           {
               DetailTktName.innerHTML = ticketArray[i].name;
               DetailProjName.innerHTML = ticketArray[i].projectID;
               DetailIdentifiedby.innerHTML = ticketArray[i].assignedTo;
               DetailAssign.innerHTML = ticketArray[i].assignedTo;
               DetailPrio.innerHTML = ticketArray[i].priority;
               DetailType.innerHTML = ticketArray[i].type;
               DetailDesc.innerHTML = ticketArray[i].desc;
               DetailDateIdent.innerHTML = ticketArray[i].date;
               DetailTargDate.innerHTML = ticketArray[i].targdate;
               DetailActDate.innerHTML = ticketArray[i].actdate;
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
        
        
        console.log(event.target.parentElement.id);
        return event.target.parentElement.id;
    }
    else
    {
         console.log("No element id ");
    }

   });

} 


function deleteTicket(id)
{
    let Tickets =JSON.parse(localStorage.getItem('Tickets'));
    for (let i = 0; i < Tickets.length; i++) 
    {
        if (Tickets[i].id == id)
        {
            Tickets.splice(i, 1);          
        }
    }
}

function CloseTicket(id)
{
    let Tickets =JSON.parse(localStorage.getItem('Tickets'));
    for (let i = 0; i < Tickets.length; i++) 
    {
        if (Tickets[i].id == id)
        {
            Tickets.status ="status";
        }
    }
}


function CloseTicketDetails()
{
    document.getElementById("ticketDetails").style.display="none";
}






