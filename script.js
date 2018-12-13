let classes = ['FCC', 'FE', 'PHP', 'JS', 'courseProject', 'techDoc', 'Pro', 'API'];

let dropdown = document.getElementById("select");
dropdown.addEventListener("change", ()=>{
    let current = dropdown.value;
    classes.forEach(cl =>{
        if(! cl === current){
            let ina = document.querySelectorAll('.' + cl);
            console.log(ina)
            //ina.forEach(i => { i.style.display= "none" })
        };
    });
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