package gameoflife;

public class GameOfLife {

//    private int[][] gameBoard =
//            {{1, 1, 1, 0, 0},
//            {1, 0, 0, 0, 0},
//            {0, 0, 0, 0, 0},
//            {0, 0, 0, 0, 0},
//            {0, 0, 0, 0, 0}};
    private int[][] gameBoard;
    private int n, m, initialBacteria; // TODO: change the chance to a percentage for the bacteria.
    private int iterations;

    public GameOfLife() {

    }

    public GameOfLife(int n, int m, int initialBacteria, int iterations) {
        this.n = n;
        this.m = m;
        this.initialBacteria = initialBacteria;
        gameBoard = new int[n][m];
        this.iterations = iterations;
    }

    public void run() {
        populateBoard(initialBacteria);
        printBoard(gameBoard);

        for (int i = 0; i < iterations; i++) {
            int[][] nextState = calculateNextState(gameBoard);
            gameBoard = nextState;
            printBoard(gameBoard);
        }
    }

    public int[][] calculateNextState(int[][] gameBoard) {

        int n = gameBoard.length, m = gameBoard[0].length;
        int[][] nextBoard = new int[n][m];

        // iterate through each position
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {

                // for each spot, count neighbours
                Neighbour numOfNeighbours = countNeighbours(gameBoard, i,j);

                // check if we need to change the type
                int populateTo = PopulationRule.toPopulateTo(gameBoard[i][j], numOfNeighbours.normalNeighbours, numOfNeighbours.mutantNeighbours);

                nextBoard[i][j] = populateTo;
            }
        }

        return nextBoard;
    }

    private boolean outOfBounds(int i, int n) {

        if (i < 0 || i >= n) {
            return true;
        }

        return false;
    }

    private Neighbour countNeighbours(int[][] gameBoard, int i, int j) {

        int n = gameBoard.length, m = gameBoard[0].length;
        int normalNeighbours = 0;
        int mutantNeighbours = 0;

        for (int ii = i-1; ii <= i+1; ii++) {
            for (int jj = j-1; jj <= j+1; jj++) {
                if (outOfBounds(ii,n) || outOfBounds(jj,m)) {
                    continue;
                }

                if (ii == i && jj == j) {
                    continue;
                }

                if (gameBoard[ii][jj] == Constants.ALIVE) {
                    normalNeighbours++;
                } else if (gameBoard[ii][jj] == Constants.MUTANT) {
                    mutantNeighbours++;
                }
            }
        }

        return new Neighbour(normalNeighbours, mutantNeighbours);
    }

    /**
     * prints the board.
     */
    public void printBoard(int[][] gameBoard) {
        int n = gameBoard.length, m = gameBoard[0].length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                System.out.print(gameBoard[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
     * populates the board with the initial number of bacteria.
     */
    private void populateBoard(int initialBacteria) {
        for (int b = 0; b < initialBacteria; b++) {
            int i = (int)(Math.random() * n);
            int j = (int)(Math.random() * m);

            gameBoard[i][j] = Constants.ALIVE;
        }
    }

    public void setBoardParameters(int n, int m, int initialBacteria) {
        this.n = n;
        this.m = m;
        this.initialBacteria = initialBacteria;
        this.gameBoard = new int[n][m];
    }

    private class Neighbour {

        private int normalNeighbours;
        private int mutantNeighbours;

        private Neighbour(int normalNeighbours, int mutantNeighbours) {
            this.normalNeighbours = normalNeighbours;
            this.mutantNeighbours = mutantNeighbours;
        }

        public int getNormalNeighbours() {
            return normalNeighbours;
        }

        public int getMutantNeighbours() {
            return mutantNeighbours;
        }
    }
}
