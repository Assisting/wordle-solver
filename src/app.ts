
import { solve } from './solver';
import { GameState } from './types';
import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.use(express.json());
app.post('/solve', async (req: Request, res: Response) => {
    try {
        const state: GameState = req.body;

        const nextItems = await solve(state.inPlace, state.outOfPlace, state.notPresent);

        res.status(200).json(nextItems);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Starting wordle-solver at http://localhost:${port}`);
});