console.log(`Hello World!`);

// const first = document.querySelector('#first-element');
// const firstDiv = document.createElement('div');
// firstDiv.innerHTML = 'Hello World!'
// const h11 = first.append(firstDiv);

// console.log(h11)


const input = document.querySelector('#content');
const add = document.querySelector('#icon2');
const remove = document.querySelector('.icon3');
const form = document.querySelector('.middle');
const body = document.body;
const send = document.querySelector('#icon1');




add.addEventListener('click', () => {
    form.classList.toggle('addlist');
    form.classList.remove('removelist');
    add.classList.toggle('none');
    remove.classList.toggle('block');
});

remove.addEventListener('click', () => {
    form.classList.toggle('removelist');
    form.classList.remove('addlist');
    remove.classList.toggle('block');
    add.classList.toggle('none');

});




// function getInputFromTextBox() {
//     var input = document.getElementById("userInput").value;
//     alert(input);
// }







if (input === '') {
    console.log('Put in something')
} else {
    console.log(input);
}

send.addEventListener('click', () => {
    setTimeout(() => {
        form.classList.remove('addlist');
        form.classList.toggle('removelist');
    }, 250);
    setTimeout(() => {
        remove.classList.toggle('block');
    }, 500);
    add.classList.toggle('none');
    input = '';
})







    const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
});
