document.getElementById("sectionTop").addEventListener("click", linkHandler);
document.getElementById("sectionWork").addEventListener("click", linkHandler);
document.getElementById("sectionConnect").addEventListener("click", linkHandler);

function linkHandler(event){
    event.preventDefault();
    const clickID = event.target.id;
    const scrollPosition = document.getElementById(`scrollTo-${clickID}`).offsetTop;
    window.scrollTo(0, scrollPosition);
}