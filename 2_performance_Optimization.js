// ! What is performace optimization: Performance optimization is the process of modifying and fine-tuning a software system or digital platform to make it execute more rapidly, use fewer resources, and handle heavier workloads efficiently

// ? Debouncing -> When we are doing some action we don't want to react immediately  at every action but we want to react when some gap is their

// let input = document.querySelector("input");

// function debounce(fun, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fun(...args);
//     }, delay);
//   };
// }

// input.addEventListener(
//   "input",
//   debounce(function () {
//     console.log("Heyy");
//   }, 1000),
// );

// ? Throttling:When we contineo our action and we have given at this time it will run it will run untill the work is done.

// let input = document.querySelector("input");

// function Throttle(fun, delay) {
//   let timer = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - timer >= delay) {
//         timer = now
//       fun(...args);
//     }
//   };
// }

// input.addEventListener(
//   "input",
//   Throttle(function () {
//     console.log("Chachaa...");
//   }, 1000),
// );

// ! Lazy loading image(with intersectionObserver)

// const images = document.querySelectorAll(".lazy-image");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const image = entry.target;

//         const imageSrc = image.dataset.src;

//         image.src = imageSrc;

//         observer.unobserve(image);
//       }
//     });
//   },
//   {
//     root: null,
//     threshold: 0.1,
//   },
// );

// images.forEach((image) => {
//   observer.observe(image);
// });

// ! code splitting
// ! What is code splitting:Code splitting is the process in which we don't load all the n number of line of code but the only code which is requried at that time and rest of it when the action happens based on action

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", async function () {
//   let heavyfunction = await import("./heavy.js");
//   heavyfunction.veryHeavy();
// });

// const ul = document.querySelector("ul");

// for (let i = 0; i <= 100; i++) {
//   let li = document.createElement("li");
//   li.textContent = i;
//   ul.appendChild(li);
// } // ? What if we wanted to add 10000 li if we do it by this way the webpage will take a long time to load and the website will be lagge

// ! In this same case we can use fragement

// const ul = document.querySelector("ul");
// let space = document.createDocumentFragment();

// for (let i = 0; i <= 100; i++) {
//   let li = document.createElement("li");
//   li.textContent = i;
//   space.appendChild(li);
// }

// ul.appendChild(space);

// ! Memory leaks in setinterval

// let timer = 1;

// setInterval(() => {
//   if (timer <= 10) {
//     console.log(timer);
//     timer++;
//   } else {
//     console.log("Ayush");
//   }
// }, 500); // ? We think that this ones the condition get satisfied the setinterval will stop but thier is leak

// let timer = 1;

// let int = setInterval(() => {
//   if (timer <= 10) {
//     console.log(timer);
//     timer++;
//   } else {
//     clearInterval(int);
//     console.log("Finined");
//   }
// }, 500);
