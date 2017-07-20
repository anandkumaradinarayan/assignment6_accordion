// const accordion = document.querySelector('.accordion-collapsed')
// const content = document.querySelector('.accordion-content')

// accordion.addEventListener ('click', function (){
// 	content.classList.toggle ('active')
// }
// )





var acc = document.getElementsByClassName("accordion-collapsed");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}