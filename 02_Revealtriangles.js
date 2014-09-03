function solve(inputArr) {
    
    var results = fillArray(inputArr);
    for (var r = 0; r < inputArr.length - 1; r++) {
        for (var c = 0; c < inputArr[r].length; c++) {
            var curChar = inputArr[r][c];
            if (curChar == inputArr[r + 1][c - 1] && curChar == inputArr[r + 1][c] && curChar == inputArr[r + 1][c + 1]) {
                results[r] = replaceChar(results[r], c);
                results[r + 1] = replaceChar(results[r + 1], c - 1);
                results[r + 1] = replaceChar(results[r + 1], c);
                results[r + 1] = replaceChar(results[r + 1], c + 1); 
            }  
        }
    }

    for (var i in results) {
        console.log(results[i]); 
    }

    function fillArray(inputArr) {
        var results = [];
        for (var i in inputArr) {
            results.push(inputArr[i]);
        }
        return results; 
    }

    function replaceChar(str, pos) {
        str = str.substr(0, pos) + '*' + str.substr(pos + 1, str.length - pos);
        return str;
    }
}
solve(["abcdexgh",
      "bbbdxxxh",
      "abcxxxxx"]);

solve(["aa",
"aaa",
"aaaa",
"aaaaa"]);
