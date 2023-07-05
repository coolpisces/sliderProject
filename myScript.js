const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const imgCount = document.querySelectorAll('img');
const imageContainer = document.querySelector('.imageContainer');

let currentImg = 1;

next.addEventListener('click', () => {
    currentImg++;
    changePhoto();

})
prev.addEventListener('click', () => {
    currentImg--;
    changePhoto();
    console.log(currentImg)
})

function changePhoto() {
    if (currentImg > imgCount.length) currentImg = 1;
    else if (currentImg < 1) currentImg = imgCount.length;
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
}