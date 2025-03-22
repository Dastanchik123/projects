imgrolik = document.querySelectorAll('#imgrolik')
namerolik = document.querySelectorAll('#namerolik')
channel = document.querySelectorAll('#channel')
views = document.querySelectorAll('#views')
imgroreleaselik = document.querySelectorAll('#release')
test_con = document.querySelector('.test_con')
n = 0;

console.log(imgrolik);
console.log(namerolik);
console.log(channel);
console.log(views);
console.log(imgroreleaselik);

array = [
    'images/01.jpg',
    'Photoshop Tutorial | How to Edit Outdoor Portrait | ( Blur & Color Background )',
    'Asm Arif',
    '578 тыс. просмотр',
    '10 месяцев назад',
]
for (let i = 0; i < imgrolik.length; i++) {
    imgrolik[i].src = array[0]
    namerolik[i].textContent = array[1]
    channel[i].textContent = array[2]
    views[i].textContent = array[3]
    imgroreleaselik[i].textContent = array[4]
}

test_con.textContent = ''
test_con.addEventListener('click', function () {
    test_con.classList.toggle('tesst')
    setTimeout(() => {
        test_con.classList.toggle('tesst')
    }, 2000);
})
