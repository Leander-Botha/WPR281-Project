
function populateFormValues()
{
    const bugFounderList = document.getElementById("bugFounder");
    const employeeList = document.getElementById("assignedEmployees");
    
    let theUsers = JSON.parse(localStorage.getItem('theUsers'))
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
    
}


// create a ticket
function createBug(){
    //document.getElementById("showAllTickets").style.display="none"; 
    //document.getElementById("addNewTicket").style.display="block";
    DisplayTicket(ticketArray);
    
}



function submitTicket(e) {
    // let CurrentDay = new Date();
     let ticketID = document.getElementById("ticketID").value;
     let projectID = document.getElementById("projectID").value;
     let AssignedEmp = document.getElementById("assignedEmployees").value;
     let ticketdescription = document.getElementById("ticketdescription").value;
     let ticketPriority = document.getElementById("ticketPriority").value;
     let ticketSubmitDate = document.getElementById("ticketSubmitDate").value;
     let bugFounder = document.getElementById("bugFounder").value;
     let actdate = document.getElementById("actualdate").value;
     let resolsum = document.getElementById("resolsummary").value;
     
     let ticket = {
       id: ticketID,
       projectID: projectID,
       description: ticketdescription,
       assignedTo: AssignedEmp,
       priority: ticketPriority,
       SubDate: ticketSubmitDate,
       Founder: bugFounder,
       actualdate: actdate,
       resolveSummary : resolsum
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
     e.preventDefault();
     document.getElementById("form").reset();
 }
 document.getElementById("submitTicket").addEventListener("click",submitTicket);
 


// Display ticket on click
function DisplayTicket(ticketArray)
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


     }

     newTktMoreDetailsBtn.addEventListener("click", DisplayTicketDetails)

     console.log("Printed from display function: ");
     console.log(ticketArray);
}
// Show all tickets
function ShowAllTickets(){

    populateFormValues()
    document.getElementById("addNewTicket").style.display="none"; 
    document.getElementById("showAllTickets").style.display="block";

}

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


function deleteTicket()
{

}

function editTicket()
{
   /* for(let i = 0; i < ticketArray.length; i++)
    {   
       if(input== ticketArray[i].name)
       {

       }
    }*/
}


function CloseTicketDetails()
{
    document.getElementById("ticketDetails").style.display="none";
}






