let steps = document.querySelectorAll(".step");
let next = document.getElementById('next');
let pre = document.getElementById('pre');
var currentActive = 0;
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > steps.length) {
        currentActive = steps.length;
    }
    update();
})
pre.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = 0;
    }
    update();
})

function update(){
    steps.forEach((step, index)  => {
        if (index <= currentActive) {
            step.classList.add('active');            
        }
        else{
            step.classList.remove('active');
        }
    })
}