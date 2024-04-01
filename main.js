// Slider
const upBtn = document.querySelector('.wrapper__up-button');
const downBtn = document.querySelector('.wrapper__down-button');
const sidebar = document.querySelector('.wrapper__sidebar');
const wrapper = document.querySelector('.wrapper')
const mainSlide = document.querySelector('.wrapper__main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () =>  {
    changeSlide('up');
})

downBtn.addEventListener('click', () =>  {
    changeSlide('down');
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = wrapper.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

// Library
AOS.init({
    disable: 'phone',
    once: true
});