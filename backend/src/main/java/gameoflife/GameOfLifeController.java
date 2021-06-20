package gameoflife;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class GameOfLifeController {

    GameOfLifeController() {

    }

    @PostMapping("/game-of-life")
    public int[][] nextBoard(@RequestBody int[][] currentBoard) {
        GameOfLife gameOfLife = new GameOfLife();
        int[][] nextBoardState = gameOfLife.calculateNextState(currentBoard);

        return nextBoardState;
    }
}