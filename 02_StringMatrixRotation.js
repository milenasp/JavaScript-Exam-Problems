function solve(input) {

    var degree = input[0].replace(/\D/g, '');
    var linesArr = [];

    for (var i = 1; i < input.length; i++) {
        linesArr.push(input[i]); 
    }

    var maxLength = findLongestWord(linesArr);
    
    //0 rotation
    if ((degree / 90) % 4 == 0)  {

        for (var i in linesArr) {
            console.log(linesArr[i]);
        }
    }
    //1 rotation 
    else if ((degree / 90) % 4 == 1) {

        for (var i = 0; i < maxLength; i++) {
            var currentString = ""; 

            for (var j = 0; j < linesArr.length; j++) {
                var currentWord = linesArr[j];

                if (i > currentWord.length - 1) {
                    currentString = " " + currentString;
                }
                else {
                    currentString = currentWord[i] + currentString;
                }
            }

            console.log(currentString);
        }
    }

    //2 rotations
    else if ((degree / 90) % 4 == 2) {

        for (var i = linesArr.length - 1; i >= 0; i--) {

            var word = linesArr[i];
            var reversed = ""; 

            for (var j = word.length - 1; j >= 0; j--) {
                reversed = reversed + word[j];
            }
            console.log(reversed); 
        }
    }
    //3 rotations
    else if ((degree / 90) % 4 == 3) {

        for (var i = maxLength - 1; i >= 0; i--) {

            var currentString = "";

            for (var j = 0; j < linesArr.length; j++) {
                var currentWord = linesArr[j];

                if (i > currentWord.length - 1) {
                    currentString = currentString + " "; 
                }
                else {
                    currentString = currentString + currentWord[i]; 
                }
            }
            console.log(currentString); 
        }
    }

    function findLongestWord(linesArr) {
        var maxLength = 0;

        for (var i = 0; i < linesArr.length; i++) {

            if (maxLength < linesArr[i].length) {
                maxLength = linesArr[i].length; 
            }
        }

        return maxLength; 
    }
}
solve(["Rotate(0)", 
       "js", 
       "exam"]);