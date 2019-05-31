let classes = ['FCC', 'FE', 'PHP', 'JS', 'React', 'courseProject', 'techDoc', 'Pro', 'API', 'all'];

let dropdown = document.getElementById("select");

dropdown.addEventListener("change", ()=>{
    let currentSelection = dropdown.value;
    classes.forEach(cl =>{
            let currentCl = document.querySelectorAll("." + cl);
            currentCl.forEach(element =>{
                if(! element.classList.contains(currentSelection)){
                    element.classList.add("inactive");
                } else {
                    element.classList.remove("inactive");
                }
           })
    });
});

let skillIcons = document.querySelectorAll(".skill");
let iconArray = Array.from(skillIcons);
let skillLabels = document.querySelectorAll(".skillLabel");
let labelArray = Array.from(skillLabels);

iconArray.forEach((icon)=>{
    icon.addEventListener("mouseover", ()=>{
        let index = iconArray.indexOf(icon);
        labelArray[index].style.opacity = 1;
        icon.style.opacity = .6;
    });
    icon.addEventListener("mouseout", ()=>{
        let index = iconArray.indexOf(icon);
        labelArray[index].style.opacity = 0;
        icon.style.opacity = 1;
    })
});