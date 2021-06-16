public class PopulationRule {

    public boolean toPopulate(boolean isAlive, int numNearbyBacteria) {
        if (isAlive) {
            if (numNearbyBacteria >= 2 && numNearbyBacteria <= 3) {
                return true;
            }
        } else {
            if (numNearbyBacteria == 3) {
                return true;
            }
        }

        // the only conditions to live are if there are exactly 2/3 and is alive,
        // and if dead, but exactly 3 nearby.
        return false;
    }
}
