// async function getData(){
//     const data = await fetch('files/bic.xml',);
//     console.log(data);
// }
//
// getData().then(data=>{
//     console.log(data);
// });

const xhr = new XMLHttpRequest();
xhr.open('get','files/bic.json');
xhr.addEventListener('load',()=>{
    console.log(JSON.parse(xhr.responseText));
});
xhr.send();


const formsContainer = document.getElementById('forms-container')
const more = document.getElementById('more');
more.addEventListener('click',()=>{
    const sendForms = document.querySelectorAll('.sendDataForm');
    const newForm = sendForms[sendForms.length-1].cloneNode(true);
    for (let i = 0; i < newForm.length; i++) {
        newForm[i].value = '';
    }
    formsContainer.appendChild(newForm);
    sendForms[sendForms.length-1].style.display='block';
});

formsContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    const el = e.target;
    if(el.className === 'btn btn-outline-warning  text-warning rounded-circle'){
        console.log('eeeeeeeeeee')
        el.closest('.sendDataForm').remove();
    }else{
        console.log('nononononono')
    }
})


class Report{
   constructor(bic, date, amount, currency){
        this.bic = bic;
        this.date = date;
        this.amount = amount;
        this.currency = currency;
   }
}





