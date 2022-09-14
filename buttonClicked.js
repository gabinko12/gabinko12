const songsEl = document.querySelector(".songs")
const buttonShowEl = document.querySelector(".buttonShow")
const buttonRemoveEl = document.querySelector(".buttonRemove")
const bozicUskrsTextEl = document.querySelector(".bu_p")
const videoEl = document.querySelector(".video")

function buttonClicked(){
    songsEl.classList.toggle("active")
    buttonShowEl.classList.toggle("remove")
    videoEl.classList.toggle("remove")
    bozicUskrsTextEl.classList.toggle("remove")
    buttonRemoveEl.classList.toggle("active2")
}