function solve(input) {

    //counting I's
    var iCount = 0;

    for (var row = 0; row < input.length - 3; row++) {
        for (var col = 0; col < input[row].length; col++) {

            if (input[row][col] == 'o' && input[row + 1][col] == 'o' && input[row + 2][col] == 'o' && input[row + 3][col] == 'o') {
                iCount++; 
            } 
        }
    }

    //counting L's
    var lCount = 0;

    for (var row = 0; row < input.length - 2; row++) {
        for (var col = 0; col < input[row].length - 1; col++) {

            if (input[row][col] == 'o' && input[row + 1][col] == 'o' && input[row + 2][col] == 'o' && input[row + 2][col + 1] == 'o') {
                lCount++; 
            }
        }
    }

    //counting J's
    var jCount = 0;

    for (var row = 0; row < input.length - 2; row++) {
        for (var col = 1; col < input[row].length; col++) {

            if (input[row][col] == 'o' && input[row + 1][col] == 'o' && input[row + 2][col] == 'o' && input[row + 2][col - 1] == 'o') {
                jCount++;
            }
        }
    }

    //counting O's
    var oCount = 0;

    for (var row = 0; row < input.length - 1; row++) {
        for (var col = 0; col < input[row].length - 1; col++) {

            if (input[row][col] == 'o' && input[row][col + 1] == 'o' && input[row + 1][col] == 'o' && input[row + 1][col + 1] == 'o') {
                oCount++; 
            }
        }
    }

    //counting Z's
    var zCount = 0;

    for (var row = 0; row < input.length - 1; row++) {
        for (var col = 0; col < input[row].length - 2; col++) {

            if (input[row][col] == 'o' && input[row][col + 1] == 'o' && input[row + 1][col + 1] == 'o' && input[row + 1][col + 2] == 'o') {
                zCount++; 
            }
        }
    }

    //counting S's
    var sCount = 0;

    for (var row = 0; row < input.length - 1; row++) {
        for (var col = 2; col < input[row].length; col++) {

            if (input[row][col] == 'o' && input[row][col - 1] == 'o' && input[row + 1][col - 1] == 'o' && input[row + 1][col - 2] == 'o') {
                sCount++; 
            }
        }
    }

    //counting T's
    var tCount = 0;

    for (var row = 0; row < input.length - 1; row++) {
        for (var col = 0; col < input[row].length - 2; col++) {

            if (input[row][col] == 'o' && input[row][col + 1] == 'o' && input[row][col + 2] == 'o' && input[row + 1][col + 1] == 'o') {
                tCount++; 
            }
        }
    }

    console.log("{" + "\"I\"" + ":" + iCount + "," + "\"L\"" + ":" + lCount + "," + "\"J\"" + ":" + jCount + "," + "\"O\"" + ":"
                + oCount + "," + "\"Z\"" + ":" + zCount + "," + "\"S\"" + ":" + sCount + "," + "\"T\"" + ":" + tCount + "}");
}

/* solve(["--o--o-",
       "--oo-oo",
       "ooo-oo-",
       "-ooooo-",
       "---oo--"]);

solve(["-oo",
       "ooo",
       "ooo"]);

       */