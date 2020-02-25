var form = document.querySelector(".main_form");
var form_toggle = document.querySelector(".form_trigger");

form_toggle.addEventListener("click", function(evt) { 
evt.preventDefault(); 
form.classList.toggle("main_form_off");
}
);

window.addEventListener("keydown", function(evt) {
if (evt.keyCode === 27) {
    if (!form.classList.contains("main_form_off")){
        evt.preventDefault();
        form.classList.add("main_form_off");
    }
}
});

