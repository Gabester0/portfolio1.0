//Skills Icons Hover Effects

const skillIcons = document.querySelectorAll(`.skill`);
const iconArray = Array.from(skillIcons);
const skillLabels = document.querySelectorAll(`.skillLabel`);
const labelArray = Array.from(skillLabels);

iconArray.forEach((icon)=>{
    icon.addEventListener(`mouseover`, ()=>{
        let index = iconArray.indexOf(icon);
        labelArray[index].style.opacity = 1;
        icon.style.opacity = .7;
        icon.style.transform = "translateY(1px)";
    });
    icon.addEventListener(`mouseout`, ()=>{
        let index = iconArray.indexOf(icon);
        labelArray[index].style.opacity = 0;
        icon.style.opacity = 1;
        icon.style.transform = "translateY(0px)";
    })
});


const classes = [`HTML`, `CSS`, `JAVASCRIPT`, `REACT`, `GIT`,`BOOTSTRAP`, `SASS`];

// let dropdown = document.getElementById(`select`);

iconArray.forEach(icon=>{
    icon.addEventListener(`click`, ()=>{
        let currentSelection = icon.id;
        console.log(currentSelection);
        classes.forEach(cl =>{
            let currentCl = document.querySelectorAll(`.${cl}`);
            currentCl.forEach(element =>{
                if(! element.classList.contains(currentSelection)){
                    element.classList.add(`inactive`);
                } else {
                    element.classList.remove(`inactive`);
                }
            })
        });
    })
})
// dropdown.addEventListener(`change`, ()=>{
//     let currentSelection = dropdown.value;
//     classes.forEach(cl =>{
//             let currentCl = document.querySelectorAll(`.${cl}`);
//             currentCl.forEach(element =>{
//                 if(! element.classList.contains(currentSelection)){
//                     element.classList.add(`inactive`);
//                 } else {
//                     element.classList.remove(`inactive`);
//                 }
//            })
//     });
// });
