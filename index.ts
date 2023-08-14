import { range } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/range

//emit 1-10 in sequence
const src$ = range(1, 10);
//output: 1,2,3,4,5,6,7,8,9,10
const example = src$.subscribe((val) => console.log(val));
