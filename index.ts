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


// import { interval } from 'rxjs';
//
// interval(1000)
//     .subscribe((v) => {
//         console.log(v);
//     })


// class CustomIterator {
//     private _cursor: number = 0;
//     private _value: number;
//
//     public constructor(
//         private _arr: number[],
//         private _divisor: number
//     ) {
//     }
//
//     public next(): { done: boolean, value: number } {
//         while(this._cursor < this._arr.length) {
//             this._value = this._arr[this._cursor++];
//             if (this._value % this._divisor === 0) {
//                 return {
//                     done: false,
//                     value: this._value
//                 }
//             }
//         }
//
//         return {
//             done: true,
//             value: this._value
//         }
//     }
//
//     [Symbol.iterator]() {
//         return {
//             next: this.next.bind(this)
//         }
//     }
// }

// const consumer = new CustomIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());

// for (let item of consumer) {
//     console.log(item);
// }

// import { Observable } from 'rxjs';
//
// const sequence$ = new Observable((subscriber) => {
//     let count = 1;
//     const interval = setInterval(() => {
//         if (count % 5 === 0) {
//             clearInterval(interval);
//             subscriber.complete();
//         }
//         subscriber.next(count++);
//     }, 1000);
//
//     return () => {
//         console.log('unsubscribe');
//         clearInterval(interval);
//     }
// });
//
// const subscription = sequence$.subscribe((v) => {
//     console.log(v);
// }, () => {}, () => {
//    console.log('completed');
// });
//
// setInterval(() => {
//     subscription.unsubscribe();
// }, 3000);

// import { interval } from 'rxjs';
//
// const sequence$ = interval(1000);
//
// const sub1 = sequence$.subscribe((v) => {
//     console.log('sub 1 => ', v);
// });
//
// sequence$.subscribe((v) => {
//     console.log('sub 2 => ', v);
// });
//
// setTimeout(() => {
//    sub1.unsubscribe();
// }, 3000);
