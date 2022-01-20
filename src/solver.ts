import { LetterAndPlace } from "./types";
import { IListOptions, wordList } from '@neopass/wordlist';

let options: IListOptions = {
    paths: [
        'OrderedWordList.txt'
    ],
    mutator: 'to-lower'
};

/**
 * Returns the next suggested word to solve the puzzle, given the current game state.
 */
export async function solve(inPlace: Array<LetterAndPlace>, wrongPlace: Array<LetterAndPlace>, notPresent: Array<string>): Promise<Array<LetterAndPlace>> {
    if (inPlace.length === 5) {
        return inPlace;
    }
    
    let words: Array<string> = [];
    try {
        words = await wordList(options);
    } catch (err) {
        console.error(`wordlist generation failed with error:\n\t${err}`);
    }

    // Remove any 'words' that aren't length 5 or that contain non-letter characters
    words = words.filter(word => word.length === 5 && hasLettersOnly(word));

    // Filter based on game state
    inPlace.forEach((letterInPlace: LetterAndPlace) => {
        words = words.filter(word => word.charAt(letterInPlace.Place) == letterInPlace.Letter);
    });
    wrongPlace.forEach((letterInWrongPlace: LetterAndPlace) => {
        words = words.filter(word => word.charAt(letterInWrongPlace.Place) != letterInWrongPlace.Letter
                                  && word.indexOf(letterInWrongPlace.Letter) != -1);
    });
    notPresent.forEach((letterNotPresent: string) => {
        words = words.filter(word => word.indexOf(letterNotPresent) === -1);
    });

    console.log(`There are ${words.length} remaining possibilities.`);

    return stringToLetterAndPlace(words[0]);
}

export function stringToLetterAndPlace(input: string): Array<LetterAndPlace> {
    let letterArray = [];
    for ( let i = 0; i < input.length; i++ ) {
        letterArray.push(new LetterAndPlace(input.charAt(i), i));
    }
    return letterArray;
}

function hasLettersOnly(word: string): boolean {
    return (/^[a-z]+$/i).test(word);
}