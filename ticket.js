
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


let ticket1 = 
{
id: 1,
projectID: 2,
name: "Syntax error line 5",
summ: "Syntax seems to be giving an error",
priority: "Low",
assignedTo: "John" ,
type: "Unresolved",
date: new Date().toDateString(),
targdate: "Thu 25 Septermber 2022",
actdate: "Thu 30 Septermber 2022",
desc: "There seems to be an error in this and that",
resolsum:"Just added a semi-colon"
}
let ticket2 = 
{
id: 2,
projectID: 2,
name: "s",
summ: "Jy is ssss",
priority: "Low",
assignedTo: "Jou ma",
type: "Unresolved",
date: new Date().toDateString(),
actdate: "Thu 25 Septermber 2022",
desc: "There seems to be an error in this and that",
resolsum:""
}

let ticket3 = 
{
id: 3,
projectID: 2,
name: "Ticker 3",
summ: "Jy is nie",
priority: "High",
assignedTo: "John Cena",
type: "Peter",
date: new Date().toDateString(),
actdate: "Thu 25 Septermber 2022",
desc: "There seems to be an error in this and that",
resolsum:""
}
let ticketArray = [];
let click = 1;


ticketArray.push(ticket1,ticket2,ticket3);

console.log(ticketArray);

function CreateTicket(ticketArray)
{
    let CurrentDay = new Date();
    let ticketID = document.getElementById("ticketID").value;
    let projectID = document.getElementById("projectID").value;
    let AssignedEmp = document.getElementById("assignedEmployees").value;
	let ticketdescription = document.getElementById("ticketdescription").value;
    let ticketPriority = document.getElementById("ticketPriority").value;
    let ticketSubmitDate = document.getElementById("ticketSubmitDate").value;
    let bugFounder = document.getElementById("bugFounder").value;
    let actdate = document.getElementById("actualdate").value;
    let resolsum = document.getElementById("resolsummary").value;
    //ticket constructor
    function Ticket(ticketID, projectID, AssignedEmp, ticketdescription,ticketPriority,ticketSubmitDate,bugFounder) {
        this.Id = ticketID;
        this.projectID = projectID ;
        this.foundby = bugFounder;
        this.Assigned = AssignedEmp;
        this.Description = ticketdescription;
        this.Priority = ticketPriority;
        this.SumbmissionDate = ticketSubmitDate;
        this.actdate = actdate;
        this.resolsum = resolsum;
      }
      let NewTicket = new Ticket(ticketID, projectID, AssignedEmp, ticketdescription, ticketPriority,ticketSubmitDate, bugFounder,actdate, resolsum);
        ticketArray.push(NewTicket);
  
        
}


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






