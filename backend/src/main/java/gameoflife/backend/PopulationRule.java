package gameoflife.backend;

/**
 * Current Rule:
 * - Survive if they have 2 or 3 neighbours.
 * - Generate if they have exactly 3 neighbours and are dead
 * - Die if too little or too many (<2 || >3)
 * - Become mutant if there is at least one mutant neighbour
 *
 * New Proposed Rule: (Mutation)
 * - Generate if exactly 8 normal neighbours
 * - Survive if exactly 1 or 2 mutant neighbours
 * - Die if 0 or more than 3 mutants.
 * - Consumes the normal one, becomes mutant if near mutant.
 */
public class PopulationRule {

    public static int toPopulateTo(int currentState, int numNearbyBacteria) {

        if (currentState == Constants.MUTANT) {
            return Constants.DEAD;
        }

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

    public static int toPopulateTo(int currentState, int numNearbyBacteria, int numMutantBacteria) {
        if (currentState == Constants.ALIVE) {

            if (numMutantBacteria >= 1) {
                return Constants.MUTANT;
            }

            if (numNearbyBacteria >= 2 && numNearbyBacteria <= 3) {
                return Constants.ALIVE;
            }
        } else if (currentState == Constants.MUTANT) {
            if (numMutantBacteria >= 1 && numMutantBacteria <= 2) {
                return Constants.MUTANT;
            }
        } else {
            if (numNearbyBacteria == 3) {
                return Constants.ALIVE;
            }

            if (numNearbyBacteria == 8) {
                return Constants.MUTANT;
            }
        }

        // the only conditions to live are if there are exactly 2/3 and is alive,
        // and if dead, but exactly 3 nearby.
        return Constants.DEAD;
    }
}
