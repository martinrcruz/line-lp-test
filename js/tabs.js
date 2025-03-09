let tabsButton = document.querySelectorAll(".tab-button")
let tabsContent = document.querySelectorAll(".tab-content")
let tabButtonBackground = document.querySelector(".tab-button-bg")

tabsButton.forEach((tab,index)=>{
    tab.addEventListener("click",(e)=>{
        tabsButton.forEach((tab)=>{
            tab.classList.remove("active")
            
        })
        tab.classList.add("active")
        tabButtonBackground.style.width = e.target.offsetWidth + "px"
        tabButtonBackground.style.left = e.target.offsetLeft + "px"
        tabsContent.forEach(content=>content.classList.remove("active"))
        tabsContent[index].classList.add("active")
    })
})