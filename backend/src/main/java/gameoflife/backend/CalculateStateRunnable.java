package gameoflife.backend;

public class CalculateStateRunnable implements Runnable {

    private int[][] gameBoard;
    private int startingI, startingJ, endI, endJ;
    private boolean isMutant;
    private GameOfLife gameOfLife;
    private volatile int[][] nextBoardSegment;

    public CalculateStateRunnable(int[][] gameBoard, int startingI, int startingJ, int endI, int endJ,
            boolean isMutant) {
        this.gameBoard = gameBoard;
        this.startingI = startingI;
        this.startingJ = startingJ;
        this.endI = endI;
        this.endJ = endJ;
        this.isMutant = isMutant;
        gameOfLife = new GameOfLife();
    }

    @Override
    public void run() {
        this.nextBoardSegment = gameOfLife.calculateNextStateMultithreaded(gameBoard, startingI, startingJ, endI, endJ,
                isMutant);
    }

    public int[][] getNextBoardSegment() {
        return this.nextBoardSegment;
    }
}
