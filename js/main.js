let inputName = document.querySelector('.inputName')
let inputYear = document.querySelector('.inputYear')
let button = document.querySelector('.button')


let errorName = document.querySelector('.errorName')
let errorYear = document.querySelector('.errorYear')
let errorSign = document.querySelector('.errorSign')

let form = document.querySelector('.form')


reg = /[A-Za-zA-яА-яЁё]/g

log = true

inputYear.oninput = function(){
    this.value = this.value.replace(reg, '')
}

const currentYear = new Date().getFullYear()
console.log(currentYear)

form.addEventListener('keyup', function(){
    if(inputName.value.length < 2){
        inputName.style.border = '2px solid red'
        errorName.innerHTML = `<p class="error">Не менее 2 символов</p>`
        log = false
    }else{
        inputName.style.border = '2px solid green'
        errorName.innerHTML = ``
        log = true
    }

    if(inputYear.value.length < 4 || inputYear.value.length > 4 ){
        inputYear.style.border = "2px solid red";
        errorYear.innerHTML = `<p class="error">Введите год рождения</p>`;
        log = false;
    }else if(currentYear-inputYear.value < 18){
        inputYear.style.border = "2px solid red";
        errorYear.innerHTML = `<p class="error">Вам меньше 18</p>`;
        log = false;


    }else{
        inputYear.style.border = "2px solid green";
        errorYear.innerHTML = ``;
        log = true;
    }
})

button.onclick = function(event){
    if(inputName.value.length === 0){
        log = false
        errorName.innerHTML = `<p class="error">Введите имя</p>`
    }
    if (inputYear.value.length === 0){
        log = false;
        errorYear.innerHTML =`<p class="error">Введите год рождения</p>`;
    }

    event.preventDefault();

    if(log == true){
        inputName.value = '';
        inputYear.value = '';
        errorYear.innerHTML = '<a href="https://club.z-go.ru/" class="pautina">Паутина клуб</p>'
    }

}