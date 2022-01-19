import { solve } from './solver';
import { LetterAndPlace } from './types';
// STEP 1
let inPlace = [];
let outOfPlace = [new LetterAndPlace('r', 4)];
let notPresent = ['s', 'h', 'e'];
console.log(await solve(inPlace, outOfPlace, notPresent));
// STEP 2
inPlace = [new LetterAndPlace('y', 4)];
outOfPlace = [new LetterAndPlace('r', 4)];
notPresent = ['s', 'h', 'e', 'j', 'a', 'z'];
console.log(await solve(inPlace, outOfPlace, notPresent));
// STEP 3
inPlace = [new LetterAndPlace('y', 4)];
outOfPlace = [new LetterAndPlace('r', 4), new LetterAndPlace('r', 3), new LetterAndPlace('o', 1)];
notPresent = ['s', 'h', 'e', 'j', 'a', 'z', 'm', 'u', 'n'];
console.log(await solve(inPlace, outOfPlace, notPresent));
// STEP 4
inPlace = [new LetterAndPlace('y', 4), new LetterAndPlace('o', 2)];
outOfPlace = [new LetterAndPlace('r', 4), new LetterAndPlace('r', 3), new LetterAndPlace('o', 1), new LetterAndPlace('r', 0)];
notPresent = ['s', 'h', 'e', 'j', 'a', 'z', 'm', 'u', 'n', 'f'];
console.log(await solve(inPlace, outOfPlace, notPresent));
// STEP 5
inPlace = [new LetterAndPlace('y', 4), new LetterAndPlace('o', 2), new LetterAndPlace('r', 1)];
outOfPlace = [new LetterAndPlace('r', 4), new LetterAndPlace('r', 3), new LetterAndPlace('o', 1), new LetterAndPlace('r', 0)];
notPresent = ['s', 'h', 'e', 'j', 'a', 'z', 'm', 'u', 'n', 'f', 'g', 'v'];
console.log(await solve(inPlace, outOfPlace, notPresent));
//# sourceMappingURL=app.js.map