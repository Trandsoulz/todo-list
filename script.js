console.log(`Hello World!`);

// const first = document.querySelector('#first-element');
// const firstDiv = document.createElement('div');
// firstDiv.innerHTML = 'Hello World!'
// const h11 = first.append(firstDiv);

// console.log(h11)


const add = document.querySelector('#icon2');
const remove = document.querySelector('.icon3');
const form = document.querySelector('.middle');
const body = document.body;

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