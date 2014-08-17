function solve(input) {

    var firstRow = "<table>";
    var secondRow = "<tr><th>Price</th><th>Trend</th></tr>";
    var lastRow = "</table>";
    var defaultRow = "<tr><td>$</td><td><img src=\"@.png\"/></td></tr>"; 

    var resultsArr = [];
    resultsArr.push(firstRow);
    resultsArr.push(secondRow);

    var previousNum = "default";

    for (var i = 0; i < input.length; i++) {
        
        var currentNum = parseFloat(input[i]).toFixed(2);
        var trend = "fixed"; 

        if (previousNum == "default") {

            defaultRow = defaultRow.replace('$', currentNum);
            defaultRow = defaultRow.replace('@', trend);
            previousNum = currentNum; 
        }
        else {

            if (currentNum > previousNum) {
                trend = "up"; 
            }
            else if (currentNum < previousNum) {
                trend = "down";
            }
            else if (currentNum == previousNum) {
                trend = "fixed"; 
            }

            defaultRow = defaultRow.replace('$', currentNum);
            defaultRow = defaultRow.replace('@', trend);
            previousNum = currentNum;
        }

        resultsArr.push(defaultRow);
        defaultRow = "<tr><td>$</td><td><img src=\"@.png\"/></td></tr>";
    }

    resultsArr.push(lastRow); 

    for (var i in resultsArr) {
        console.log(resultsArr[i]); 
    }
}
//solve([50, 60]);
//solve([36.333, 36.5, 37.019, 35.4, 35, 35.001, 36.225]);
solve([1.33, 1.35, 2.25, 13.00, 0.5, 0.51, 0.5, 0.5, 0.33, 1.05, 1.346, 20, 900, 1500.1, 1500.10, 2000]);