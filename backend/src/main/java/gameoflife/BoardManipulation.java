package gameoflife;

public class BoardManipulation {

    public static int[][] mergeFourBoardSegments(int n, int m, int[][] seg1, int[][] seg2, int[][] seg3, int[][] seg4) {
        int[][] newBoard = new int[n][m];
        int middleI = n/2;
        int middleJ = m/2;

        // top left
        for (int i = 0; i < seg1.length; i++) {
            for (int j = 0; j < seg1[0].length; j++) {
                newBoard[i][j] = seg1[i][j];
            }
        }

        // top right
        for (int i = 0; i < seg2.length; i++) {
            for (int j = 0; j < seg2[0].length; j++) {
                newBoard[i][j + middleJ + 1] = seg2[i][j];
            }
        }

        // bottom left
        for (int i = 0; i < seg3.length; i++) {
            for (int j = 0; j < seg3[0].length; j++) {
                newBoard[i + middleI + 1][j] = seg3[i][j];
            }
        }

        // bottom right
        for (int i = 0; i < seg4.length; i++) {
            for (int j = 0; j < seg4[0].length; j++) {
                newBoard[i + middleI + 1][j + middleJ +1] = seg4[i][j];
            }
        }

        return newBoard;
    }
}
