function solve(input) {

    var templateArr = ["<ul>"];
    var start = parseInt(input[0]);
    var end = parseInt(input[1]);

    for (var i = start; i <= end; i++) {

        var str = i.toString(); 

        if (str.length < 4) {

            var currentString = "<li><span class='num'>" + i + "</span></li>";
            templateArr.push(currentString);
        }
        else {
            
            if (checkIfRakiaNum(str)) {
                var rakiaStr = "<li><span class='rakiya'>" + str + "</span><a href=\"view.php?id=" + str + "\">View</a></li>"; 
                templateArr.push(rakiaStr); 
            }
            else {
                var currentString = "<li><span class='num'>" + i + "</span></li>";
                templateArr.push(currentString);
            }
        }
    }

    templateArr.push("</ul>");

    for (var i in templateArr) {
        console.log(templateArr[i]); 
    }
    
    function checkIfRakiaNum(str) {

        for (var i = 0; i < str.length - 1; i++) {
            
            var substrStart = i; 
            var substrEnd = substrStart + 2;
            var counter = 0;

            var subStr = str.substring(substrStart, substrEnd);

            if (str.indexOf(subStr, substrEnd) != -1) {

                counter++; 
            }

            if (counter > 0) {

                return true; 
            }
        }

        return false; 
    }
}
solve(["5", "8"]);
solve(["11210", "11215"]);
solve(["55555", "55560"]); 

