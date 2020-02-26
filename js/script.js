var form = document.querySelector(".main_form");
var form_toggle = document.querySelector(".form_trigger");

var day_in = document.querySelector("[name=arrival_date]");
var day_out = document.querySelector("[name=departure_date]");
var adult = document.querySelector("[name=adult]");
var kids = document.querySelector("[name=kids]");


/*Открытие при нажатии кнопки*/

form_toggle.addEventListener("click", function(evt) { 
    evt.preventDefault(); 
    form.classList.toggle("main_form_off");
}
);

/*Анимация при открытии*/

form_toggle.addEventListener("click",function(evt){
    if (!form.classList.contains("main_form_off")){
        form.classList.add("animation");
    }
    else {
        form.classList.remove("animation");
        form.classList.remove("main_form_error");
    }
}
);

/*Проверка формы на валидность*/

form.addEventListener("submit", function(evt){
    if (!day_in.value || !day_out.value || !adult.value || !kids.value) {
        evt.preventDefault();
        form.classList.remove("main_form_error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("main_form_error");
    }     
}
);

/*Выключение формы и сброс классов с помощью клавиши ESC*/

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (!form.classList.contains("main_form_off")){
            evt.preventDefault();
            form.classList.add("main_form_off");
            form.classList.remove("animation");
            form.classList.remove("main_form_error");
        }
    }
}
);


