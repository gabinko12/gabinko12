/* Song list */
const songsEl = document.querySelector(".songs")
const songsUskrsEl = document.querySelector(".uskrsS")
/* Buttons */
const buttonShowEl = document.querySelector(".buttonShow")
const buttonRemoveEl = document.querySelector(".buttonRemove")
const buttonShowUskrsEl = document.querySelector(".buttonShowUskrs")
const buttonRemoveUskrsEl = document.querySelector(".buttonRemoveUskrs")
const showImagesFligEl = document.querySelector(".showImagesFlig")
const removeImagesFligEl = document.querySelector(".removeImagesFlig")
/* Text, video and images */
const bozicTextEl = document.querySelector("#bozic p")
const uskrsTextEl = document.querySelector("#uskrs p")
const videoEl = document.querySelector(".video")
const video1El = document.querySelector(".video1")
const fligImages = document.querySelector(".imagesWrapper")

/* Functions */
function buttonClicked(){
    songsEl.classList.toggle("active")
    buttonShowEl.classList.toggle("remove")
    videoEl.classList.toggle("remove")
    bozicTextEl.classList.toggle("remove")
    buttonRemoveEl.classList.toggle("active2")
}
function buttonClickedUskrs(){
    songsUskrsEl.classList.toggle("active")
    buttonShowUskrsEl.classList.toggle("remove")
    buttonRemoveUskrsEl.classList.toggle("active2")
    uskrsTextEl.classList.toggle("remove")
    video1El.classList.toggle("remove")
}
