const section = document.getElementById('main');
section.style.backgroundColor=' blue';
section.style.padding=' 0';
section.style.margin=' 0';
section.style.display = 'flex';


const modal = document.querySelector(".modal");
const openBtn = document.getElementById("btn-open");
const closeButton = document.querySelector(".close-button");

openBtn.onclick = function(){
    modal.style.display = "block";
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
