const container = document.querySelector('.container')
const cursor = document.querySelector('.cursor')

container.addEventListener("mousemove",(event)=>{
    let contRect = container.getBoundingClientRect()
    let cursRect =cursor.getBoundingClientRect()
    let cursX = event.clientX - contRect.left -cursRect.width/2
    let cursY = event.clientY - contRect.top -cursRect.height/2
    cursor.style.left = `${cursX}px`
    cursor.style.top = `${cursY}px`
})