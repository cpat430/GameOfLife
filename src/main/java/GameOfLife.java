public class GameOfLife {

    private int[][] gameBoard;
    private int n, m, initialBacteria; // TODO: change the chance to a percentage for the bacteria.

    public GameOfLife(int n, int m, int initialBacteria) {
        this.n = n;
        this.m = m;
        this.initialBacteria = initialBacteria;
        gameBoard = new int[n][m];
    }

    public void run() {
        populateBoard();
        printBoard();

        int[][] nextState = calculateNextState(gameBoard);

    }

    private int[][] calculateNextState(int[][] gameBoard) {

        // interate through each position


        return new int[1][1];
    }

    /**
     * prints the board.
     */
    private void printBoard() {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(gameBoard[i][j] + " ");
            }
            System.out.println();
        }
    }

    /**
     * populates the board with the initial number of bacteria.
     */
    private void populateBoard() {
        for (int b = 0; b < initialBacteria; b++) {
            int i = (int)(Math.random() * n);
            int j = (int)(Math.random() * m);

            gameBoard[i][j] = 1;
        }
    }
}
