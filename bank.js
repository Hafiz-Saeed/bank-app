//Register

function regBtn() {

  username = document.getElementById('uname').value;
 let accno = document.getElementById('accntno').value;
 let psd = document.getElementById('pswd').value;

   accountDetails = {
   username,
   accno,
   psd
   };

   if (accno == '' || username == '' || psd == '') {
    alert('Please fillout all the feilds');
   } else if (accno in localStorage){
    alert('Account already exist');
   }
   else {
    localStorage.setItem(accno,JSON.stringify(accountDetails));
    alert('Registration successful');

    window.location = "./login.html";

   }


}



//Login 

function loginBtn(){
  let accno = document.getElementById('accntno').value;
  let psd = document.getElementById('pswd').value;


  if (accno == '' ||  psd == '') {
    alert('Please fillout all the feilds');
  }
  else if (accno in localStorage && psd in localStorage) {
    alert('Login sucessful');

    window.location = "./dashboard.html";


  }
}



//Deposit

let balance = 0;
let amnt = 0;
let withdraw = 0;
let totlBalance = 0;
let pswd = '';


function depositMoney() {
  amnt = deposite_amnt.value;
  pswd = deposit_pswd.value;
  amnt = Math.floor(amnt);
  balance += amnt;
console.log(balance);
  if (pswd in localStorage) {
    accountDetails = JSON.parse(localStorage.getItem(pswd));
    if (pswd == accountDetails.pswd && amnt < 0) {
        alert('Value cannot be empty or negative value')
    }
    else {
        alert('Your amount is successfully added');
        document.getElementById('balance_amount').innerHTML = `<div class = "text-success" style = "font-weight : 500;color: green;">Your current balance is ${balance}</div>`
    }
  }
}

//Withdraw 

function withdrawMoney() {
        amnt = withdraw_amnt.value;
        pswd = withdraw_pswd.value;
        amnt = Math.floor(amnt);
        balance -= amnt;
      
        if (pswd in localStorage) {
          accountDetails = JSON.parse(localStorage.getItem(pswd));
          if (pswd == accountDetails.pswd && amnt < 0) {
              alert('Value cannot be empty or negative value')
          }
          else {
              alert('Your amount is withdrawed successfully ');
              alert(`You withdrawed ${amnt}`)
              document.getElementById('balance_amnt').innerHTML = `<div class = "text-danger" style = "font-weight : 500;"> Your current balance is ${balance}</div>`
          }
        }
      }

      function logout() {
        window.location = "./home.html"
        localStorage.clear();
    }


    function login() {

      window.location = "./login.html"
    }

    function register() {
      window.location = "./register.html"
    }