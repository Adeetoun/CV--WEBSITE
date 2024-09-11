const btn = document.querySelector('.btn');
const hidden = document.querySelector('.hidden');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    hidden.classList.add('hidden');
    hidden.style.display = "block";
    btn.style.display = 'none';
});

close.addEventListener('click', () => {
    hidden.style.display = 'none';
    btn.style.display = 'inline';
})