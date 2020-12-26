
const button=document.querySelector('#sub');
button.addEventListener('click',(e)=>{
  e.preventDefault();
  const data=document.querySelector('#adds').value;
  console.log(data)
  fetch('http://localhost:3000/forecast?addrs='+data).then((response)=>{
  response.json().then((data)=>{
    if(data.error){

      document.querySelector('#op').innerHTML=data.error;
    }
    else{
      document.querySelector('#op').innerHTML="Tempreature:"+data.temp;
      document.querySelector('#op1').innerHTML="Weather:"+data.weather;
      document.querySelector('#op2').innerHTML="Location:"+data.location;
    }
        
    });
});
});
