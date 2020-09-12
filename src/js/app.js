const root = document.getElementById('root');
const loadingEl = document.getElementById('loading');

function loadingGif() {
    loadingEl.style.display = 'flex';
}
function loadingGifEnd() {
    loadingEl.style.display = 'none';
}

const form = document.querySelector('#form form');

form.addEventListener('input',()=>{
    document.querySelector('.is-invalid')?
        document.querySelector('.is-invalid').classList.remove('is-invalid'):null;
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(form[0].value === ''){
        form[0].classList +=' is-invalid';
        console.log(form[0].classList);
    }
    if(form[1].value === ''){
        form[1].classList +=' is-invalid';
        console.log(form[1].classList);
    }

        if(form[0].value !== '' && form[1].value !== ''){
        console.log(form[0].value);
        console.log(form[1].value);
        loadingGif();
        setTimeout(()=>{

            loadingGifEnd()
        },2000)
    }
});




