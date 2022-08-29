# WPR281 Group Assignment 

## Project Documentation and Functions 
----------
### Frontend  GUI Design:

+ *Keenan Lombard*
+ *Dewald Willem Dirks*

### Backend  Coding:

+ *Juanro Minne*
+ *Johan Lindeque*
+ *Leander Botha*
  
###   JavaScript Functions: 

| Function | Description |
| ------ | ----------- |
| AddUser()|  Adds a new user and their details to the local storage.|
| ShowEmp()|  Displays all the current users to the interface.|
| resetAddUser()| Clears all the input fields to register a new user. |
| NewUser()   | Switches between what is displayed on the GUI.|
| checkUserLogin() | Validates the user login details and checks is against the stored login data in the local storage,the function also notifies the user which input is incorrect if any.   |
| clearUserLogin()    | Clears the login input elements. |
| newProj()     | Receives user input to create a new project which then gets stored in the local storage. |
| ShowProj()    | Switches between the project submit form and displaying all the projects |
| ShowAllProj(Name,desc)|  Displays all the current Projects which are saved in local storage to the interface.|
| resetForm()|  Clears the project submission form.|
| populateFormValues()|  Populates the dropdown list of the of the webpage when it is opened.|
| submitTicket()|  Submits the user input for creating a new ticket,the ticket info is then stored to an object and passed to the local storage. |
| ShowAllTickets()|  retrieves and displays all the tickets which have been created from the local storage.|
| DeleteTicket(ticketID)| Deletes the ticket from the local storage when the delete button on the ticket is clicked.|
|ViewMoreDetails(ticketID)|  Displays a more detailed discription of the ticket when clicked. |
|OpenTicket(ticketID)| Changes the status of a ticket to **Open** if the current status is **closed/resolved**.|
|CloseTicket(ticketID)| Changes the status of a ticket to **Closed** if the current status is **Open**.|
| CloseTicketDetails() | closes the extended dicription of the ticket that the **ViewMoreDetails()** fucntion opened|
| editTicket()   | Allows the user to edit the details of a ticket and save it|

-----------------

## Software Used in project:

* *JavaScript*
* *Bootstrap*
* *Html*
* *Css*
* *Markdown*



