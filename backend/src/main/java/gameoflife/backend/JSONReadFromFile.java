package gameoflife.backend;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.*;
import java.util.*;

public class JSONReadFromFile {

    private static final String STRUCTURE_URL = "structures/gameOfLifeStructures.json";

    public Map<String, int[][]> readStructuresIntoMap() {

        Map<String, int[][]> structures = new HashMap<String, int[][]>();
        List<String> types = new ArrayList<String>() {
            {
                add("still-lifes");
                add("oscillators");
                add("spaceships");
            }
        }; // todo, add these from somewhere else

        InputStream is = null;
        try {
            is = getClass().getClassLoader().getResourceAsStream(STRUCTURE_URL);

            JSONTokener tokener = new JSONTokener(is);
            JSONObject jsonObject = new JSONObject(tokener);

            // iterate through all the types
            for (String type : types) {

                JSONObject typeObject = jsonObject.getJSONObject(type);

                // get the names of the structures in the object.
                JSONArray jsonArray = typeObject.names();
                List<String> names = new ArrayList<String>();
                jsonArray.forEach((name) -> names.add((String) name));

                // iterate through each of the structures grids
                // e.g still-life, oscillators, spaceships.
                for (String name : names) {
                    JSONArray jsonGrid = typeObject.getJSONArray(name);

                    List<List<Integer>> grid = new ArrayList<>();
                    for (int i = 0; i < jsonGrid.length(); i++) {
                        List<Object> row = jsonGrid.getJSONArray(i).toList();
                        int[] integerRow = row.stream().mapToInt((a) -> Integer.parseInt(a.toString())).toArray();
                        grid.add(Arrays.stream(integerRow).boxed().toList());
                    }

                    int n = grid.size();
                    int m = grid.get(0).size();

                    int[][] intGrid = new int[n][m];

                    for (int i = 0; i < n; i++) {
                        for (int j = 0; j < m; j++) {
                            intGrid[i][j] = grid.get(i).get(j);
                        }
                    }

                    structures.put(name, intGrid);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return structures;
    }
}
