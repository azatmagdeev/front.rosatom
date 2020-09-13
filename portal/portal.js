console.log(window.location.origin);
const xhr = new XMLHttpRequest();
xhr.open('get',window.location.origin+':8000/api/ping', true);
xhr.addEventListener('load',()=>{
    console.log(xhr.responseText);
});
xhr.send();


const formsContainer = document.getElementById('forms-container');
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
        console.log('eeeeeeeeeee');
        el.closest('.sendDataForm').remove();
    }else{
        console.log('nononononono')
    }
});

const sendBtn = document.getElementById('send');


class Report{
   constructor(
       bic,
       date,
       amount,
       currency,
       comment,
   ){

        this.bic = bic;
        this.date = date;
        this.amount = amount;
        this.currency = currency;
        this.comment = comment;
        this.inn= '';
        this.bankName = '';
        this.startContract="";
        this.activateContract="";
        this.endContract=""; this.interest="";
        this.moneyCod=currency;
        this.moneyCount=amount;
        this.uuid="";
   }

   send(){
       console.log(this);
       const xhr = new XMLHttpRequest();
       xhr.open('post','/api/setContract');

       xhr.setRequestHeader('Content-Type', 'application/json');
       xhr.addEventListener('load',()=>{
           console.log(JSON.stringify(this));
       });
       xhr.send(JSON.stringify(this));
   }
}

sendBtn.addEventListener('click',()=>{
    const form = formsContainer.querySelector('form');
    const report = new Report(
        form[1].value,
        (new Date).toLocaleDateString(),
        form[3].value,
        form[2].value,
        form[4].value,
    );
    report.send()
});

document.getElementById('my-reports').addEventListener('click',(e)=>{
    // e.target.parent?e.target.parent.classList.remove('bg-light'):null;
    // e.target.parent.classList.add('bg-info');

    document.getElementById('send-report-main').style.display='none';
    document.getElementById('my-reports-main').style.display='block';
});

document.getElementById('send-report').addEventListener('click',(e)=>{
    //
    // e.target.parent.classList.remove('bg-light');
    // e.target.parent.classList.add('bg-info');
    document.getElementById('send-report-main').style.display='block';
    document.getElementById('my-reports-main').style.display='none';
});

document.getElementById('exit').addEventListener('click',()=>{
    history.back();
});

