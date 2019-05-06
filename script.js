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
})