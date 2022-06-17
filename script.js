console.log(`Hello World!`);

// const first = document.querySelector('#first-element');
// const firstDiv = document.createElement('div');
// firstDiv.innerHTML = 'Hello World!'
// const h11 = first.append(firstDiv);

// console.log(h11)


let input = document.querySelector('#content');
const add = document.querySelector('#icon2');
const remove = document.querySelector('.icon3');
const form = document.querySelector('.middle');
const send = document.querySelector('#icon1');
const errorMessage = document.querySelector('.error-message')


// Bring up input field for text

add.addEventListener('click', () => {
    form.classList.toggle('addlist');
    form.classList.remove('removelist');
    add.classList.toggle('none');
    remove.classList.toggle('block');

    input.value = '';
});

// Removes input field after texting or if no input was put in it

remove.addEventListener('click', () => {
    form.classList.toggle('removelist');
    form.classList.remove('addlist');
    remove.classList.toggle('block');
    add.classList.toggle('none');

    errorMessage.innerHTML = ''

});

// getting data from input field, and appending it to HTML page 

const inputValidationForm = () => {
   


if (input.value === '') {
    errorMessage.innerHTML = 'Put in something yoooo 🥶🥶🥶  '
} else {
    setTimeout(() => {
        form.classList.remove('addlist');
        form.classList.toggle('removelist');
    }, 1000);
    setTimeout(() => {
        remove.classList.toggle('block');
    }, 500);
    add.classList.toggle('none');

    event.preventDefault();

    console.log(input.value);

    errorMessage.innerHTML = `That's more like it 😏😏😏`;
}

const inputValue = input.value.map( words => {
    console.log(words)
})
};

// Send data to HTML page 

send.addEventListener('click', () => {
   inputValidationForm()
});

window.addEventListener('keyup', (event) => {

    if (event.keyCode == 13) {
        inputValidationForm()
    } else {
        event.defaultPrevented
    }
});








//     const btn = document.getElementById('btn');

// btn.addEventListener('click', function handleClick(event) {
//   // 👇️ if you are submitting a form (prevents page reload)
//   event.preventDefault();

//   const firstNameInput = document.getElementById('first_name');

//   // Send value to server
//   console.log(firstNameInput.value);

//   // 👇️ clear input field
//   firstNameInput.value = '';
// });
