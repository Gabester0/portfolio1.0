//FCC, FE, PHP, JS, courseProject, techDoc, Pro, API
let classes = [{ FCC : document.querySelectorAll(".FCC") },
                {FE : document.querySelectorAll(".FE")},
                {PHP : document.querySelectorAll(".PHP")},
                {JS : document.querySelectorAll(".JS")},
                {courseProject : document.querySelectorAll(".courseProject")},
                {techDoc : document.querySelectorAll(".techDoc")},
                {Pro : document.querySelectorAll(".Pro")},
                {API : document.querySelectorAll(".API")}];

let dropdown = document.getElementById("select");
dropdown.addEventListener(onblur, (event)=>{
    console.log("changes");
})
//Need an eventListener for the select to initiate the script
//Will set the current selection

//Then the js will add an inactive class to everything not selected
//The default state will be that all projects are active.
let itemClasses = ''; //All the coursework items (JS object with the classes)
//This should contain all projects with each project including all classes in a js object

//then we use a for in loop to iterate through and add an inactive css class to all that don't
//contain the current selection.  

//The css inactive class will make these projects display off screen.  