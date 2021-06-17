import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GameOfLifeTest {

//    private int[][] gameBoard =
//        {{1, 0, 0, 0, 1},
//        {1, 0, 1, 0, 1},
//        {0, 1, 0, 1, 1},
//        {0, 0, 0, 0, 0},
//        {1, 0, 0, 0, 0}};
//    private int[][] gameBoard;

    GameOfLife gameOfLife;

    @BeforeEach
    public void setUp() {
        gameOfLife = new GameOfLife();
    }

    @Test
    public void testEmptyBoard5x5() {

        int[][] emptyGameBoard = new int[5][5];

        int[][] result = gameOfLife.calculateNextState(emptyGameBoard);

        compareBoard(emptyGameBoard, result);
    }

    @Test
    public void testAllSingleBacteriaDie() {

        int[][] gameBoard = {
                {1,0,0,1},
                {0,0,0,0},
                {0,1,0,0},
                {0,0,0,1}
        };

        int[][] result = gameOfLife.calculateNextState(gameBoard);

        int[][] expected = new int[4][4];

        compareBoard(expected, result);
    }

    @Test
    public void testSingleNeighbourDies() {
        int[][] gameBoard = {
                {1,0,0,1},
                {1,0,0,0},
                {0,0,0,1},
                {0,0,0,1}
        };

        int[][] result = gameOfLife.calculateNextState(gameBoard);

        int[][] expected = new int[4][4];

        compareBoard(expected, result);
    }

    @Test
    public void testBacteriaSurvivesWith2or3Neighbours() {
        int[][] gameBoard = {
                {1,1,1,0},
                {1,0,0,0},
                {0,0,0,0},
                {0,0,0,0}
        };

        int[][] result = gameOfLife.calculateNextState(gameBoard);

        int[][] expected = {
                {1,1,0,0},
                {1,0,0,0},
                {0,0,0,0},
                {0,0,0,0}
        };

        compareBoard(expected, result);
    }

    @Test
    public void testBacteriaDieIfTooManyNeighbours() {
        int[][] gameBoard = {
                {1,1,1,0},
                {1,1,0,0},
                {0,0,0,0},
                {0,0,0,0}
        };

        int[][] result = gameOfLife.calculateNextState(gameBoard);

        int[][] expected = {
                {1,0,1,0},
                {1,0,1,0},
                {0,0,0,0},
                {0,0,0,0}
        };

        compareBoard(expected, result);
    }

    private void compareBoard(int[][] board1, int[][] board2) {

        for (int i = 0; i < board1.length; i++) {
            for (int j = 0; j < board1[0].length; j++) {
                assertEquals(board1[i][j],board2[i][j]);
            }
        }
    }
}
