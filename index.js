const accordionHeaders = document.querySelectorAll(".accordion__header")
accordionHeaders.forEach(accordionHeader=>{
    accordionHeader.addEventListener("click", (event)=>{
        toggleAccordionCollapse(event)
    })
})

function toggleAccordionCollapse(event){
    const accordionHeaderElement = event.currentTarget
    const accordionParent = accordionHeaderElement.closest(".accordion") 
    accordionParent.classList.toggle("accordion--collapsed")
}