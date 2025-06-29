let input = document.querySelector("input");
let span = document.querySelector("h1 span");
let table = document.querySelector("table tbody");
let modal = document.querySelector(".modal");
let balance = 0;
let transaction = [];

let deposit = () => {
  let amount = +input.value;
  balance += amount;
  span.innerText = `${balance}`;
  input.value = "";
table.innerHTML += `
                <tr>
                    <td>${transaction.length +1}</td>
                    <td>${balance-amount}</td>
                    <td>deposit</td>
                    <td>${amount}</td>
                    <td>${balance}</td>
                </tr>
`
transaction.push({
    type: "Deposit",
    amount: amount,
    oldBalance: balance-amount,
    newBalance: balance
})
};
let withdrow = () => {
  let amount = +input.value;
  if (amount <= balance) {
    balance -= amount;
    span.innerText = `${balance}`;
    input.value = "";
    table.innerHTML += `
                <tr>
                    <td>${transaction.length +1}</td>
                    <td>${balance+amount}</td>
                    <td>withdrow</td>
                    <td>${amount}</td>
                    <td>${balance}</td>
                </tr>
`
transaction.push({
    type: "Withdrow",
    amount: amount,
    oldBalance: balance-amount,
    newBalance: balance
})
  } else {
    alert("انت افقر من كدا");
    input.value = "";
  }
};

let openModal = () => {
  modal.style.display = "flex";
};
let closeModal = () => {
  modal.style.display = "none";
};
