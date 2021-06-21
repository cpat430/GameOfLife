package gameoflife;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JSONReadFromFile {

    private static final String STRUCTURE_URL = "src/main/resources/structures/gameOfLifeStructures.json";

    public static Map<String, int[][]> readStructuresIntoMap() {

        Map<String, int[][]> structures = new HashMap<>();
        List<String> types = new ArrayList<>() {
            {
                add("still-lifes");
                add("oscillators");
                add("spaceships");
            }
        }; // todo, add these from somewhere else

        try {
            InputStream is = new FileInputStream(new File(STRUCTURE_URL));
            if (is == null) {
                throw new NullPointerException("Cannot find resource file " + STRUCTURE_URL);
            }

            JSONTokener tokener = new JSONTokener(is);
            JSONObject jsonObject = new JSONObject(tokener);
            
            // iterate through all the types
            for (String type : types) {

                JSONObject typeObject = jsonObject.getJSONObject(type);

                // get the names of the structures in the object.
                JSONArray jsonArray = typeObject.names();
                List<String> names = new ArrayList<>();
                jsonArray.forEach((name) -> names.add((String)name));

                // iterate through each of the structures grids
                // e.g still-life, oscillators, spaceships.
                for (String name : names) {
                    JSONArray jsonGrid = typeObject.getJSONArray(name);
    
                    List<List<Integer>> grid = new ArrayList<>();
                    for (int i = 0; i < jsonGrid.length(); i++) {
                        List<Integer> row = (ArrayList) jsonGrid.getJSONArray(i).toList();
                        grid.add(row);
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

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        return structures;
    }
}

