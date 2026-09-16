// ! What is design patterns: Design patterns is more like writing code in module pattern in self excution function called as (IIFE) because the variable function are private init. We only return things which we are using outside of function. The main profit is that because we write in IIFE the variable and fucntion can't be accessed outside

// let Bank = (function () {
//   let bankBalance = 100000;

//   function getBalance() {
//     console.log(bankBalance);
//   }
//   function setBalance(amount) {
//     bankBalance = bankBalance + amount;
//     console.log(bankBalance);
//   }
//   function withdraw(amount) {
//     if (amount <= bankBalance) {
//       bankBalance -= amount;
//       console.log(`Withdraw SuccessFull and withdraw amount is ${amount}`);
//     } else {
//       console.log(`Amount is more than bankBalance`);
//     }
//   }
//   return {
//     getBalance,
//     withdraw,
//     setBalance,
//   };
// })();

// This was the example of module pattern

// ! Reveling module pattern: Is just similar like design pattern just when we return the fucntion in a object we can name them something else. You can see below

// let Bank = (function () {
//   let bankBalance = 100000;

//   function getBalance() {
//     console.log(bankBalance);
//   }
//   function setBalance(amount) {
//     bankBalance = bankBalance + amount;
//     console.log(bankBalance);
//   }
//   function withdraw(amount) {
//     if (amount <= bankBalance) {
//       bankBalance -= amount;
//       console.log(`Withdraw SuccessFull and withdraw amount is ${amount}`);
//     } else {
//       console.log(`Amount is more than bankBalance`);
//     }
//   }
//   return {
//     get: getBalance,
//     set: setBalance,
//     withDram: withdraw,
//   };
// })();

// ! Factory function pattern:Is more like class and constructor

// function createProduct(name, price) {
//   let Instock = 10;
//   return {
//     name,
//     price,
//     checkStock() {
//       console.log(`Their are ${Instock} Instock`);
//     },
//     buy(quantity) {
//       if (quantity <= Instock) {
//         Instock = Instock - quantity;
//         console.log(`${Instock} left and ${quantity} Booked SuccessFull`);
//       }
//     },
//     refill(refill_quantity) {
//       Instock = Instock + refill_quantity;
//       console.log(`${Instock} are in stock`);
//     },
//   };
// }

// let iphone = createProduct("Iphone", 70000);
// iphone.buy(7);
// iphone.checkStock();
// iphone.refill(7);
// iphone.checkStock();

// let kitkat = createProduct("KitKat", 10);
// kitkat.buy(2);
// kitkat.checkStock();
// kitkat.refill(10);
