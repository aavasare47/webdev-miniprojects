let count = 0;
const number = document.getElementById('number');
const buttons = document.querySelectorAll(".btn")

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const currentClass = e.currentTarget.classList;
        if(currentClass.contains('decrease')){
            count--;
        }
        else if(currentClass.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count >0){
            number.style.color = 'green';
        }
        else if(count <0){
            number.style.color = 'red';
        }
        else {
            number.style.color = '#222';
        }
        number.textContent = count;
        
    });
});