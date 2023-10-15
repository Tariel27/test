let range = document.getElementById("customRange");

let loanAmount = document.getElementById("loanAmount");
let generalAmount = document.getElementById("generalAmount");
let bid = document.getElementById("bid");

const withDrawal = 5.0;
const withoutDrawal = 12.5;
const mounts = 12;

const currencyFormat = new Intl.NumberFormat("kg-KG");

range.addEventListener("input", (event) => {
  event.preventDefault();
  setLoanAmount();
  setGeneralAmount();
});

function setLoanAmount() {
  loanAmount.value = range.value;
  loanAmount.innerHTML = currencyFormat.format(range.value) + "c";
}

function setGeneralAmount() {
  generalAmount.innerHTML =
    currencyFormat.format(Math.floor(subtract(range.value))) + "c";
}

function subtract(value) {
  let a = value / mounts;
  return a + percentage(a, bid.value);
}

function percentage(partialValue, totalValue) {
  return (totalValue / 100) * partialValue;
}

function changeBid(newBid) {
  bid.value = newBid;
  bid.innerHTML = newBid + "%";
  setGeneralAmount();
}

function setWithDrawal() {
  changeBid(withDrawal);
}
function setWithoutDrawal() {
  changeBid(withoutDrawal);
}

setWithoutDrawal();
setLoanAmount();

//=====
const phoneInput1 = document.getElementById("phone1");
const nameInput1 = document.getElementById("name1");
const checkBox1 = document.getElementById("checkData1");
const submitButton = document.getElementById("submit-button");

checkBox1.addEventListener("click", function (event) {
  if (checkBox1.checked) {
    submitButton.classList.remove("btn-secondary");
    submitButton.classList.add("btn-primary");
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.classList.remove("btn-primary");
    submitButton.classList.add("btn-secondary");
    submitButton.setAttribute("disabled", null);
  }
});

phoneInput1.addEventListener("input", function (event) {
  event.preventDefault();
  let value = phoneInput1.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput1.value = value.substring(0, 12);
  } else {
    phoneInput1.value = value;
  }
});

const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");

phoneInput.addEventListener("input", function (event) {
  event.preventDefault();
  let value = phoneInput.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput.value = value.substring(0, 12);
  } else {
    phoneInput.value = value;
  }
});

//=====
const form1 = document.getElementById("notification-form");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  if (isEmpty(nameInput.value) || isEmpty(phoneInput.value)) {
    document.getElementById("notification-block").scrollIntoView();
  } else {
    sendMail(nameInput.value, phoneInput.value);
  }
});

const form2 = document.getElementById("notification-form2");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!isEmpty(nameInput1.value) && !isEmpty(phoneInput1.value)) {
    sendMail(nameInput1.value, phoneInput1.value);
  }
});

function isEmpty(str) {
  return !str || str.length === 0;
}

function sendMail(name, phone) {
  let body = `
    <div>
      <div>ФИО: ${name}</div>
      <div>Номер: ${phone}</div>
    </div>
  `;

  Email.send({
    SecureToken: "3200ec58-ed40-4e87-ab21-e3f9c86b8abb",
    To: "tulpar-car@mail.ru",
    From: "tulpar.car1516@gmail.com",
    Subject: "Заявка на перезвон",
    Body: body,
  }).then(() => window.location.reload());
}
