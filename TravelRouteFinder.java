import java.util.*;

public class TravelRouteFinder {

    public static List<String> findRoute(String startCity, List<String> citiesVisited, List<String> tickets) {
        Map<String, List<String>> graph = new HashMap<>();
        
        // Build the graph from the tickets
        for (String ticket : tickets) {
            String[] cities = ticket.split("-");
            String fromCity = cities[0];
            String toCity = cities[1];
            graph.putIfAbsent(fromCity, new ArrayList<>());
            graph.get(fromCity).add(toCity);
        }
        
        // Function to perform DFS
        Set<String> visited = new HashSet<>();
        List<String> route = new ArrayList<>();
        
        if (dfs(startCity, citiesVisited, graph, visited, route)) {
            return route;
        } else {
            return Collections.emptyList(); // No valid route found
        }
    }
    
    private static boolean dfs(String city, List<String> citiesVisited, Map<String, List<String>> graph, Set<String> visited, List<String> route) {
        route.add(city);
        visited.add(city);
        
        if (route.size() == citiesVisited.size()) {
            return true; // Found a valid route
        }
        
        if (graph.containsKey(city)) {
            for (String neighbor : graph.get(city)) {
                if (!visited.contains(neighbor)) {
                    if (dfs(neighbor, citiesVisited, graph, visited, route)) {
                        return true;
                    }
                }
            }
        }
        
        // Backtrack
        visited.remove(city);
        route.remove(route.size() - 1);
        return false;
    }
    
    public static void main(String[] args) {
        String startCity = "Kiev";
        List<String> citiesVisited = Arrays.asList("Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona");
        List<String> tickets = Arrays.asList(
            "Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich",
            "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris",
            "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"
        );
        
        List<String> route = findRoute(startCity, citiesVisited, tickets);
        if (!route.isEmpty()) {
            System.out.println("Route traveled by your son: " + route);
        } else {
            System.out.println("No valid route found.");
        }
    }
}
