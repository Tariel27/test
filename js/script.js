let range=document.getElementById("customRange"),loanAmount=document.getElementById("loanAmount"),generalAmount=document.getElementById("generalAmount"),bid=document.getElementById("bid");const withDrawal=5,withoutDrawal=12.5,mounts=12,currencyFormat=new Intl.NumberFormat("kg-KG");function setLoanAmount(){loanAmount.value=range.value,loanAmount.innerHTML=currencyFormat.format(range.value)+"c"}function setGeneralAmount(){generalAmount.innerHTML=currencyFormat.format(Math.floor(subtract(range.value)))+"c"}function subtract(t){let e=t/12;return e+percentage(e,bid.value)}function percentage(t,e){return e/100*t}function changeBid(t){bid.value=t,bid.innerHTML=t+"%",setGeneralAmount()}function setWithDrawal(){changeBid(5)}function setWithoutDrawal(){changeBid(12.5)}range.addEventListener("input",t=>{t.preventDefault(),setLoanAmount(),setGeneralAmount()}),setWithoutDrawal(),setLoanAmount();const phoneInput1=document.getElementById("phone1"),nameInput1=document.getElementById("name1"),checkBox1=document.getElementById("checkData1"),submitButton=document.getElementById("submit-button");checkBox1.addEventListener("click",function(t){checkBox1.checked?(submitButton.classList.remove("btn-secondary"),submitButton.classList.add("btn-primary"),submitButton.removeAttribute("disabled")):(submitButton.classList.remove("btn-primary"),submitButton.classList.add("btn-secondary"),submitButton.setAttribute("disabled",null))}),phoneInput1.addEventListener("input",function(t){t.preventDefault();let e=phoneInput1.value,n=[3,6,9];for(let u=0;u<=9;u++)e.length==n[u]&&(e+="-");e.length>12?phoneInput1.value=e.substring(0,12):phoneInput1.value=e});const phoneInput=document.getElementById("phone"),nameInput=document.getElementById("name");phoneInput.addEventListener("input",function(t){t.preventDefault();let e=phoneInput.value,n=[3,6,9];for(let u=0;u<=9;u++)e.length==n[u]&&(e+="-");e.length>12?phoneInput.value=e.substring(0,12):phoneInput.value=e});const form1=document.getElementById("notification-form");form1.addEventListener("submit",function(t){t.preventDefault(),isEmpty(nameInput.value)||isEmpty(phoneInput.value)?document.getElementById("notification-block").scrollIntoView():sendMail(nameInput.value,phoneInput.value)});const form2=document.getElementById("notification-form2");function isEmpty(t){return!t||0===t.length}function sendMail(t,e){let n=`<div><div>ФИО: ${t}</div><div>Номер: ${e}</div></div>`;Email.send({SecureToken:"3200ec58-ed40-4e87-ab21-e3f9c86b8abb",To:"tulpar-car@mail.ru",From:"tulpar.car1516@gmail.com",Subject:"Заявка на перезвон",Body:n}).then(()=>window.location.reload())}form2.addEventListener("submit",function(t){t.preventDefault(),isEmpty(nameInput1.value)||isEmpty(phoneInput1.value)||sendMail(nameInput1.value,phoneInput1.value)});