
import { solve } from './solver';
import { LetterAndPlace } from './types';

let inPlace: Array<LetterAndPlace> = [new LetterAndPlace('p', 0)];
let outOfPlace: Array<LetterAndPlace> = [new LetterAndPlace('r', 2)];
let notPresent: Array<string> = ['a', 'k', 's'];

console.log(await solve(inPlace, outOfPlace, notPresent));