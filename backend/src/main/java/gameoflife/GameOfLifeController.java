package gameoflife;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class GameOfLifeController {

    private Map<String, int[][]> structures;

    @PostConstruct
    public void initialize() {
        structures = JSONReadFromFile.readStructuresIntoMap();
    }

    @PostMapping("/game-of-life")
    public int[][] nextBoard(@RequestBody int[][] currentBoard) {
        GameOfLife gameOfLife = new GameOfLife();
        int[][] nextBoardState = gameOfLife.calculateNextState(currentBoard);

        return nextBoardState;
    }

    @GetMapping("/structures")
    public int[][] getStructures(@RequestParam String structureName) {

        return structures.getOrDefault(structureName, new int[0][0]);
    }
}