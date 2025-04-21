package gameoflife.backend;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.websocket.server.PathParam;

class BoardRequest {
    private int[][] currentBoard;

    public int[][] getCurrentBoard() {
        return currentBoard;
    }

    public void setCurrentBoard(int[][] currentBoard) {
        this.currentBoard = currentBoard;
    }
}

class BoardResponse {
    private int[][] nextBoard;

    public BoardResponse(int[][] nextBoard) {
        this.nextBoard = nextBoard;
    }

    public int[][] getNextBoard() {
        return nextBoard;
    }
}

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class GameOfLifeController {

    private Map<String, int[][]> structures;

    @PostConstruct
    public void initialize() {
        JSONReadFromFile fileReader = new JSONReadFromFile();
        structures = fileReader.readStructuresIntoMap();
    }

    @PostMapping("/game-of-life")
    public @ResponseBody BoardResponse nextBoard(@RequestBody() BoardRequest boardRequest,
            @PathParam("isMutant") boolean isMutant) {
        int[][] currentBoard = boardRequest.getCurrentBoard();

        GameOfLife gameOfLife = new GameOfLife();
        int[][] nextBoardState = gameOfLife.calculateNextState(currentBoard, isMutant);

        return new BoardResponse(nextBoardState);
    }

    @PostMapping("/game-of-life-multithreaded")
    public @ResponseBody BoardResponse nextBoardMultithreaded(@RequestBody BoardRequest request,
            @PathParam("isMutant") boolean isMutant)
            throws InterruptedException {

        int[][] currentBoard = request.getCurrentBoard();
        int[][] nextBoardState;

        // create 4 threads for the graph if it is bigger than 5x5
        if (currentBoard.length > 5) {
            nextBoardState = MultithreadingCalculationProcess.getNextMultithreadedState(currentBoard, isMutant);
        } else {
            GameOfLife gameOfLife = new GameOfLife();
            nextBoardState = gameOfLife.calculateNextState(currentBoard, isMutant);
        }

        return new BoardResponse(nextBoardState);
    }

    @GetMapping("/structures")
    public int[][] getStructures(@RequestParam String structureName) {

        return structures.getOrDefault(structureName, new int[0][0]);
    }
}