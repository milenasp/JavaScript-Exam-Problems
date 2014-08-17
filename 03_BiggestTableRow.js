function solve(input) {

    var openTag = "</";
    var maxSum = -Number.MAX_VALUE;
    var maxSumArr = []; 

    for (var i = 2; i < input.length - 1; i++) {
        var currentString = input[i];
        var tempSum = 0; 
        var tempSumArr = [];

        for (var j = 0; j < currentString.length; j++) {
            var currentChar = currentString[j];
            var digitIndex = 0;

            if (checkIfDigit(currentChar)) {
                digitIndex = j;

                if (currentString[digitIndex - 1] == '-') {
                    digitIndex = j - 1; 
                }

                var indexOfOpenTag = currentString.indexOf(openTag, digitIndex);
                var number = currentString.substring(digitIndex, indexOfOpenTag);
                tempSum += parseFloat(number);
                tempSumArr.push(number); 
                j += (indexOfOpenTag - digitIndex); 
            }
        }
        
        
        if (tempSum > maxSum) {
            maxSum = tempSum;
            maxSumArr = tempSumArr.slice(); 
        }
    }

    //OUTPUT:

    if (maxSum == -Number.MAX_VALUE) {

        console.log("no data"); 
    }
    else {
        console.log(maxSum + " = " + maxSumArr.join(" + "));
    }

    function checkIfDigit(currentChar) {
        switch (currentChar) {
            case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                return true;
            default:
                return false;
        }
    }
}
//solve(
//    ["<table>",
//    "<tr><th>town</th><th>store1</th><th>store2</th><th>store3</th></tr>",
//    "<tr><td>sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
//    "<tr><td>varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
//    "<tr><td>plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
//    "<tr><td>bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>",
//    "</table>"]
//);

solve(
    ["<table>",
     "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>", 
     "<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>",
     "</table>"]
);

//solve(
//    ["<table>",
//     "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
//     "<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>",
//     "<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>",
//     "<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>",
//     "</table>"]
//);

//solve(
//    ["<table>",
//     "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
//     "<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>",
//     "<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>",
//     "<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>",
//     "</table>"]);