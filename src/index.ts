import { interval } from 'rxjs';

const sequence$ = interval(1000);

const sub1 = sequence$.subscribe((v) => {
    console.log('sub 1 => ', v);
});

sequence$.subscribe((v) => {
    console.log('sub 2 => ', v);
});

setTimeout(() => {
   sub1.unsubscribe();
}, 3000);
