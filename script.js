console.log("hello world!");


$(document).ready(onReady);

let employeeinfo = []



function onReady(){
    console.log('hello from jQuery')

    $('#submitB').on('click', submitForm); //event listener


    $('#submitB').on('click', buttonClicked); //event listener | this is 'listening for click action. then it will run function.
    
  
   
        // descendant selector
    $('#appendingEmp').on('click', '.deleteBtn', deleteFunc); // this is saying any child li's made will carry this deletefunction.

}


function deleteFunc(){
    console.log("delete");
    $(this).parent().parent().remove(); // the this event is saying I when x item is clicked do .remove()
}




function buttonClicked(){
    console.log('buttonClicked Func');

    let ulEmployees = $("#appendingEmp");

    for (let i = 0 ; i < employeeinfo.length; i++){ 
        console.log("woot");
        
        ulEmployees.append(`
        <tr> 
            <td> ${employeeinfo[i].nameKey} </td>
            <td> ${employeeinfo[i].lastNKey} </td>
            <td> ${employeeinfo[i].IDKey}</td> 
            <td> ${employeeinfo[i].titleKey}</td> 
            <td> ${employeeinfo[i].AnnSalary}</td> 
            <td> <button class= "deleteBtn"> DELETE </button> </td>
        </tr>`);
            
    }

}






function submitForm() {
    console.log('clicking the submitfunc');
    // this is where I want to grab input values;
    // getter .val()
    // setter .val('fills in')
    //.text() is another getter and setter | if you want to GET something leave .() open | setter you need to have .('something') inside.

    let name = $('#firstName').val();
    console.log('fistname: ', name);

    let lastname = $('#lastName').val();
    console.log('lastname: ', lastname);

    let ID = $('#iD').val();
    console.log('Id: ', ID)

    let title = $('#title').val();
    console.log('title:', title)

    let Salary = $('#annSalary').val();
    console.log('Salary: ', Salary)

    $('#firstName').val(''); // this is going to display the placesholders as empty.
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annSalary').val('');

   
    let newEmployee = {
        nameKey: name,
        lastNKey: lastname,
        IDKey: ID,
        titleKey: title,
        AnnSalary: Salary
    }

    employeeinfo.push(newEmployee)


}