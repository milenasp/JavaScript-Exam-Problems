function solve(input) {
    var resultsArr = []; 
    var start = parseInt(input[0]); 
    var end = parseInt(input[1]); 
    
    resultsArr.push("<table>"); 
    resultsArr.push("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>"); 

    for (var i = start; i <= end; i++) {
        var currentLine = "<tr><td>" + i + "</td><td>" + (i*i) + "</td><td>"; 
        
        if (isFibonacci(i)) {
            currentLine = currentLine + "yes"; 
        }
        else {
            currentLine = currentLine + "no";
        }

        currentLine = currentLine + "</td></tr>"; 
        resultsArr.push(currentLine); 
    }
    resultsArr.push("</table>"); 

    for (var i in resultsArr) {
        console.log(resultsArr[i]);
    }

    function isFibonacci(num) {
        temp = 0; 
        var a = 0; 
        var b = 1; 
        var isFibonacci = false;

        while (temp <= 1000000000) {
            temp = a; 
            a = b; 
            b = a + temp; 

            if (num == temp) {
                isFibonacci = true; 
                break; 
            }
        }
        return isFibonacci; 
    }
}
solve([514220, 514230]); 