// const sequence = new Promise((res) => {
//   let count = 1;
//   setInterval(() => {
//     count += 1;
//     res(count);
//   });
// });
//
// sequence.then((v) => console.log(v));
// sequence.then((v) => console.log(v));

// const sequence = function* iteratorFn() {
//   let count = 1;
//   while (true) {
//     yield count++;
//   }
// }();
//
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);


import { interval } from 'rxjs';

interval(1000)
    .subscribe((v) => {
        console.log(v);
    })
