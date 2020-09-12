async function getData(){
    const data = await fetch('http://www.cbr.ru/scripts/XML_bic.asp',);
    console.log(data);
}

getData().then(data=>{
    console.log(data);
});

