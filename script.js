console.log("hello world!");


$(document).ready(onReady);


function onReady(){
    console.log('hello from jQuery')

    $('#submitB').on('click', buttonClicked); //event listener | this is 'listening for click action. then it will run function.





}



function buttonClicked(){
    console.log('the button was clicked!')


}