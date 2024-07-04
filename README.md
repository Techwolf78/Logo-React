#  Assignment 1: Designing the Logo

Logo.tsx 
```bash
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-[#9BCD31] border-r-[#FF4500] border-b-[#A3A3A3] border-l-[#4682B4] transform rotate-45"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-2xl font-bold">HTML <span className="text-orange-500">&</span> CSS</h1>
          <p className="text-sm">design and build websites</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
```
Logo Component Design </br>
This React component (Logo.tsx) creates a logo using HTML and CSS, styled with Tailwind CSS classes. Here’s a breakdown:

Outer Container (div.flex.justify-center.items-center.h-screen.bg-gray-900):
  - Centers the content vertically and horizontally (flex justify-center items-center).
  - Sets a dark gray background (bg-gray-900) covering the entire screen (h-screen).
  
Logo Container (div.relative.w-64.h-64):
  - Positioned relatively (relative).
  - Dimensions set to 64 pixels for width and height (w-64 h-64).
  
Border Design (div.absolute.top-0.left-0 ...):
  - Positioned absolutely at the top-left corner of its parent container (absolute top-0 left-0).
  - Draws a rotated border using Tailwind CSS border utilities (border-8, border-transparent, border-t-[#9BCD31], border-r-[#FF4500], border-b-[#A3A3A3], border-l-[#4682B4], transform rotate-45).
    
Content (div.absolute.inset-0 ...):
  - Positioned absolutely to cover its parent container (absolute inset-0).
  - Uses flexbox (flex flex-col justify-center items-center) to center its contents vertically and horizontally.
  - Text elements styled with Tailwind CSS classes (text-white, text-2xl, text-sm, font-bold, text-orange-500).
  - 
Text Elements:
  - h1 className="text-2xl font-bold" HTML span className="text-orange-500"&</span> CSS</h1>: Displays a heading with "HTML & CSS" in bold (text-2xl and font-bold), with the ampersand (&) colored orange (text-orange-500).
  - <p className="text-sm">design and build websites</p>: Displays a paragraph with the text "design and build websites" in smaller text size (text-sm).

## PLEASE find the preview of the logo here " https://logo-react.vercel.app/ " 

# Assignment 2: Finding the Travel Route

Method to find the route traveled by the son
```bash
public static List<String> findRoute(String startCity, List<String> citiesVisited, List<String> tickets) {
````
Build the graph from the list of tickets
```bash
Map<String, List<String>> graph = new HashMap<>();
for (String ticket : tickets) {
String[] cities = ticket.split("-");
String fromCity = cities[0];
String toCity = cities[1];
graph.putIfAbsent(fromCity, new ArrayList<>());
graph.get(fromCity).add(toCity);
}
```
Track visited cities and the current route
```bash        
Set<String> visited = new HashSet<>();
List<String> route = new ArrayList<>();
```    
Use depth-first search to find the route
```bash
if (dfs(startCity, citiesVisited, graph, visited, route)) {
return route; 
} else {
return Collections.emptyList(); 
}
}
```   

Depth-first search method to explore possible routes
```bash
    private static boolean dfs(String city, List<String> citiesVisited, Map<String, List<String>> graph, Set<String> visited, List<String> route) {
        route.add(city);
        visited.add(city);
 ```       
Base case: Check if all cities visited have been included in the route
```bash
        if (route.size() == citiesVisited.size()) {
            return true; 
        }
``` 
Explore neighbors in the graph
```bash
        if (graph.containsKey(city)) {
            for (String neighbor : graph.get(city)) {
                if (!visited.contains(neighbor)) {
                    if (dfs(neighbor, citiesVisited, graph, visited, route)) {
                        return true; 
                    }
                }
            }
        }
```
Backtrack: Remove the current city from route and mark as not visited
```bash
        visited.remove(city);
        route.remove(route.size() - 1);
        return false; 
    }
```
Main method to test the TravelRouteFinder class
```bash
    public static void main(String[] args) {
        String startCity = "Kiev";
        List<String> citiesVisited = Arrays.asList("Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona");
        List<String> tickets = Arrays.asList(
            "Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich",
            "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris",
            "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"
        );
```
Find the route based on input data
```bash
        List<String> route = findRoute(startCity, citiesVisited, tickets);
        if (!route.isEmpty()) {
            System.out.println("Route traveled by your son: " + route);
        } else {
            System.out.println("No valid route found.");
        }
    }
}
````
## OUTPUT OF THE SECOND ASSESMENT - The code is in this file (TravelRouteFinder.java)  

```bash
PS C:\Users\Pawar GP\Desktop\course\excelR\Java> javac TravelRouteFinder.java   
PS C:\Users\Pawar GP\Desktop\course\excelR\Java> java TravelRouteFinder.java
Route traveled by your son: [Kiev, Prague, Zurich, Amsterdam, Barcelona, Berlin]
```
