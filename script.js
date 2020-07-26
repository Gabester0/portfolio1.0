document.getElementById("section-top").addEventListener("click", linkHandler);
document.getElementById("section-work").addEventListener("click", linkHandler);
document.getElementById("section-connect").addEventListener("click", linkHandler);

function linkHandler(event){
    event.preventDefault();
    const clickID = event.target.id;
    const scrollPosition = document.getElementById(`js--${clickID}`).offsetTop;
    window.scrollTo(0, scrollPosition);
}