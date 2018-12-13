let classes = ['FCC', 'FE', 'PHP', 'JS', 'courseProject', 'techDoc', 'Pro', 'API', 'all'];

let dropdown = document.getElementById("select");
dropdown.addEventListener("change", ()=>{
    let current = dropdown.value;
    classes.forEach(cl =>{
            let ina = document.querySelectorAll("." + cl);
            ina.forEach(i =>{
                if(! i.classList.contains(current)){
                    i.classList.add("inactive");
                } else {
                    i.classList.remove("inactive");
                }
           })
    });
})