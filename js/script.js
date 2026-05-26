'use script'
document.addEventListener("DOMContentLoaded", function(){
    console.log('Скрипт отработал корректно')
});

const welcomeButtonModal = document.querySelector(" .incontact_button");
const modalApplication = document.querySelector(".applications");

if(welcomeButtonModal && modalApplication){
    welcomeButtonModal.addEventListener("click", function(event){
        modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("clock", function(event){
    if(event.target === modalApplication){
        modalApplication.setAttribute("hidden", true);
    }
})

const closeModalButton = document.querySelector(".application_close");

closeModalButton.addEventListener("click", function(event){
    modalApplication.setAttribute("hidden", true);
});