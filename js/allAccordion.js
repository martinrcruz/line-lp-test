let accordionHeader = document.querySelectorAll(".accordion-header")
let accordionContents = document.querySelectorAll(".accordion-content")
let accordionTermsButton = document.querySelectorAll(".accordion-icon")



    accordionHeader.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            button.classList.toggle("open")
            accordionTermsButton[index].classList.toggle("open")
            accordionContents[index].classList.toggle("open")
        })
    })


