package gameoflife;

public class MultithreadingCalculationProcess {

    public static int[][] getNextMultithreadedState(int[][] currentBoard, boolean isMutant) throws InterruptedException {

        int n = currentBoard.length;
        int m = currentBoard[0].length;
        int middleI = (int) Math.ceil(n / 2) + 1;
        int middleJ = (int) Math.ceil(m / 2) + 1;

        // create the runnables
        CalculateStateRunnable topLeftRunnable = new CalculateStateRunnable(currentBoard, 0, 0, middleI, middleJ, isMutant);
        CalculateStateRunnable topRightRunnable = new CalculateStateRunnable(currentBoard, 0, middleJ, middleI, m, isMutant);
        CalculateStateRunnable bottomLeftRunnable = new CalculateStateRunnable(currentBoard, middleI, 0, n, middleJ, isMutant);
        CalculateStateRunnable bottomRightRunnable = new CalculateStateRunnable(currentBoard, middleI, middleJ, n, m, isMutant);

        // create the threads.
        Thread topLeftThread = new Thread(topLeftRunnable);
        Thread topRightThread = new Thread(topRightRunnable);
        Thread bottomLeftThread = new Thread(bottomLeftRunnable);
        Thread bottomRightThread = new Thread(bottomRightRunnable);

        // start the threads
        topLeftThread.start();
        topRightThread.start();
        bottomLeftThread.start();
        bottomRightThread.start();

        // join the threads when they've finished.
        topLeftThread.join();
        topRightThread.join();
        bottomLeftThread.join();
        bottomRightThread.join();

        // collect the segments that have been calculated
        int[][] topLeftBoardSegment = topLeftRunnable.getNextBoardSegment();
        int[][] topRightBoardSegment = topRightRunnable.getNextBoardSegment();
        int[][] bottomLeftBoardSegment = bottomLeftRunnable.getNextBoardSegment();
        int[][] bottomRightBoardSegment = bottomRightRunnable.getNextBoardSegment();

        // merge the board segments
        return BoardManipulation.mergeFourBoardSegments(n, m, topLeftBoardSegment, topRightBoardSegment, bottomLeftBoardSegment, bottomRightBoardSegment);
    }
}
