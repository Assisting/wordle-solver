# wordle-solver
[Wordle](https://www.powerlanguage.co.uk/wordle/) has recently become an obsession on a few Discord servers I belong to. After playing my first game, and nearly being defeated in the 6th round, I decided this field of endeavour was ripe for automation.

## Dependencies
* wordle-solver assumes you have TypeScript installed globally. If you don't, run:

  `npm install -g typescript`
  
## Use
wordle-solver is almost entire unusable in its current state and I honestly can't recommend you try. I'll build a GUI for it [eventually](https://github.com/Assisting/wordle-solver/issues/2). Until then, you can manually call the `solve()` function as demonstrated in [`/src/app.ts`](https://github.com/Assisting/wordle-solver/blob/main/src/app.ts) if you really want to.
  
Then, run `npm start` and await the results.