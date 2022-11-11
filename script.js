const container = document.querySelector('.carousel_container')
const frame = container.querySelector('.img_cont')
const slider = frame.querySelector('.slider_container')
const carousels = frame.querySelectorAll('.carousel')
const left = document.querySelector('[data-left]')
const right = document.querySelector('[data-right]')
const items = carousels.length
const width = `${items * 100}%`

slider.style.width = width

slider.style.transform = `translateX(calc(-1 * ${0} * (100% / ${items})))`

let currentIndex = 0;

function slide(increment){
 currentIndex += increment
if(currentIndex > items - 1) {
  currentIndex = 0
}
if(currentIndex < 0) {
  currentIndex = items - 1
}
slider.style.transform = `translateX(calc(-1 * ${currentIndex} * (100% / ${items})))`
}

left.addEventListener('click', ()=>{
  slide(-1)
})
right.addEventListener('click', ()=>{
  slide(1)
})