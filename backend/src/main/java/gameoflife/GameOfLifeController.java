package gameoflife;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.websocket.server.PathParam;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class GameOfLifeController {

    private Map<String, int[][]> structures;

    @PostConstruct
    public void initialize() {
        structures = JSONReadFromFile.readStructuresIntoMap();
    }

    @PostMapping("/game-of-life")
    public int[][] nextBoard(@RequestBody int[][] currentBoard, @PathParam("isMutant") boolean isMutant) {
        GameOfLife gameOfLife = new GameOfLife();
        int[][] nextBoardState = gameOfLife.calculateNextState(currentBoard, isMutant);

        return nextBoardState;
    }

    @PostMapping("/game-of-life-multithreaded")
    public int[][] nextBoardMultithreaded(@RequestBody int[][] currentBoard, @PathParam("isMutant") boolean isMutant) throws InterruptedException {

        int[][] nextBoardState;

        // create 4 threads for the graph if it is bigger than 5x5
        if (currentBoard.length > 5) {
            nextBoardState = MultithreadingCalculationProcess.getNextMultithreadedState(currentBoard,  isMutant);
        } else {
            GameOfLife gameOfLife = new GameOfLife();
            nextBoardState = gameOfLife.calculateNextState(currentBoard, isMutant);
        }

        return nextBoardState;
    }

    @GetMapping("/structures")
    public int[][] getStructures(@RequestParam String structureName) {

        return structures.getOrDefault(structureName, new int[0][0]);
    }
}