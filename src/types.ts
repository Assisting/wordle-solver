export class LetterAndPlace {
    place: number;
    letter: string;

    constructor(letter: string, place: number) {
        this.letter = letter;
        this.place = place
    }
}

export interface GameState {
    inPlace: Array<LetterAndPlace>;
    outOfPlace: Array<LetterAndPlace>;
    notPresent: Array<string>;
}

export class Suggestions {
    suggested: Array<Array<LetterAndPlace>>;
    optionsLeft: number;

    constructor(suggested: Array<Array<LetterAndPlace>>, optionsLeft: number) {
        this.suggested = suggested;
        this.optionsLeft = optionsLeft;
    }
}