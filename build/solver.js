import { LetterAndPlace } from "./types";
import { wordList } from '@neopass/wordlist';
let options = {
    paths: [
        '/usr/share/dict/words',
        '$default'
    ],
    mutator: 'to-lower'
};
/**
 * Returns the next suggested word to solve the puzzle, given the current game state.
 */
export async function solve(inPlace, wrongPlace, notPresent) {
    if (inPlace.length === 5) {
        return inPlace;
    }
    let words = [];
    try {
        words = await wordList(options);
    }
    catch (err) {
        console.error(`wordlist generation failed with error:\n\t${err}`);
    }
    // Remove any 'words' that aren't length 5 or that contain non-letter characters
    words = words.filter(word => word.length === 5 && hasLettersOnly(word));
    // Filter based on game state
    inPlace.forEach((letterInPlace) => {
        words = words.filter(word => word.charAt(letterInPlace.Place) == letterInPlace.Letter);
    });
    wrongPlace.forEach((letterInWrongPlace) => {
        words = words.filter(word => word.charAt(letterInWrongPlace.Place) != letterInWrongPlace.Letter
            && word.indexOf(letterInWrongPlace.Letter) != -1);
    });
    notPresent.forEach((letterNotPresent) => {
        words = words.filter(word => word.indexOf(letterNotPresent) === -1);
    });
    console.log(`There are ${words.length} remaining possibilities.`);
    const randomIndex = Math.floor(Math.random() * words.length);
    return stringToLetterAndPlace(words[randomIndex]);
}
export function stringToLetterAndPlace(input) {
    let letterArray = [];
    for (let i = 0; i < input.length; i++) {
        letterArray.push(new LetterAndPlace(input.charAt(i), i));
    }
    return letterArray;
}
function hasLettersOnly(word) {
    return (/^[a-z]+$/i).test(word);
}
//# sourceMappingURL=solver.js.map