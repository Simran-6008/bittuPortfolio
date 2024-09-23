let contactCon = document.getElementById("contact-con")
let popUp = document.getElementById("pop-up")
let close = document.getElementById("close")

contactCon.addEventListener("click", () =>{
    popUp.style.visibility = "visible"
})

close.addEventListener("click", () =>{
    popUp.style.visibility = "hidden"
})