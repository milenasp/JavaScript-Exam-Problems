function solve(input) {
    var venues = {};

    for (var i in input) {
        var currentLine = input[i].split(/[|]/);
        var band = currentLine[0].trim();
        var town = currentLine[1].trim();
        var venue = currentLine[3].trim();

        if (!(town in venues)) {
            venues[town] = {};
        }
        if (!(venue in venues[town])) {
            venues[town][venue] = [];
        }
        if (venues[town][venue].indexOf(band) === -1) {
            venues[town][venue].push(band);
        }
    }

    var sortedTowns = [];
    for (var town in venues) {
        sortedTowns.push(town);
    }
    sortedTowns.sort();

    var result = "{";

    for (var i = 0; i < sortedTowns.length; i++) {
        var sortedVenues = [];

        for (var venue in venues[sortedTowns[i]]) {
            sortedVenues.push(venue);
        }
        sortedVenues.sort();

        for (var k = 0; k < sortedVenues.length; k++) {
            venues[sortedTowns[i]][sortedVenues[k]].sort();
        }
        
        result = result + "\"" + sortedTowns[i].toString() + "\"" + ":" + "{";
        for (var j in sortedVenues) {
            result = result + "\"" + sortedVenues[j] + "\"" + ":" + "[";

            for (var k in venues[sortedTowns[i]][sortedVenues[j]]) {
                result = result + "\"" + venues[sortedTowns[i]][sortedVenues[j]][k] + "\"" + ",";
            }
            result = result.substring(0, result.length - 1);
            result = result + "]" + ",";
        }
        result = result.substring(0, result.length - 1);
        result = result + "}" + ",";
        
    }
    result = result.substring(0, result.length - 1);
    result = result + "}";
    console.log(result);

}


solve(["ZZ Top | London | 2-Aug-2014 | Wembley Stadium",
"Iron Maiden | London | 28-Jul-2014 | Wembley Stadium",
"Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium",
"Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium",
"Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium",
"Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium",
"Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium",
"Helloween | London | 28-Jul-2014 | Wembley Stadium",
"Twisted Sister | London | 30-Sep-2014 | Wembley Stadium",
"Metallica | London | 03-Oct-2014 | Olympic Stadium",
"Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium",
"Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium"]);
