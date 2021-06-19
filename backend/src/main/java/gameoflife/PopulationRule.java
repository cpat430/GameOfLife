package gameoflife;

public class PopulationRule {

    public static int toPopulateTo(int currentState, int numNearbyBacteria) {
        if (currentState == Constants.ALIVE) {
            if (numNearbyBacteria >= 2 && numNearbyBacteria <= 3) {
                return Constants.ALIVE;
            }
        } else {
            if (numNearbyBacteria == 3) {
                return Constants.ALIVE;
            }
        }

        // the only conditions to live are if there are exactly 2/3 and is alive,
        // and if dead, but exactly 3 nearby.
        return Constants.DEAD;
    }
}
