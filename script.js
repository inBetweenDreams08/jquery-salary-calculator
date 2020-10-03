console.log("hello world!");


$(document).ready(onReady);

let employeeinfo = ['dogs','cats', 'birds']

function onReady(){
    console.log('hello from jQuery')

    $('#submitB').on('click', buttonClicked); //event listener | this is 'listening for click action. then it will run function.
    
    // $('#appendingEmp').append('<td>hello</td>')

   
        // descendant selector
    $('#appendingEmp').on('click', '.deleteBtn', deleteFunc);


}


function deleteFunc(){
    console.log("delete");
    $(this).parent().remove(); // the this event is saying I when x item is clicked do .remove()
}










function buttonClicked(){
    console.log('the button was clicked!')

    let ulEmployees = $("#appendingEmp");

    for (let i = 0 ; i < employeeinfo.length; i++){ 
        ulEmployees.append(
            `<td>  ${employeeinfo[i]}
                 <button class= "deleteBtn"> DELETE </button> 
            </td>`);
    }

}


function submitForm() {
    console.log('clicking the submit button');
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

   $('#name').val('') // this is an ex. of using .val as a setter
   $('#title').val('')

    let newEmployee = {
        nameKey: name,
        lastNKey: lastname,
        IDKey: ID,
        titleKey: title,
        AnnSalary: Salary
    }

    employeeinfo.push(newEmployee)

}