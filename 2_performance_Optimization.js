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
