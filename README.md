JavaScript-Exam-Problems
========================

Solutions to the problems from the JavaScript Exams - July2014

========================
Exam 28 July 2014
========================
PROBLEM 1 - Double Rakiya Numbers

A "double rakiya number" is an integer that contains a sequence of 2 digits twice (without overlapping). For example "23156312" is a "double rakiya number" because it contains "31" twice. Other examples of "double rakiya numbers" are: 1212, 3333, 203103, 5210217, 21212121, and 55555. Examples of non-"double rakiya numbers" are: 333, 5, 111222, 1234567131, and 12213114.
Write a JavaScript function that takes as input two numbers (start and end) and prints at the console a HTML list holding all numbers in the range [start…end], along with a link to view details about all "double-rakiya numbers" in that range. Please use the format from the below examples.
Input
The input is passed to the first JavaScript function found in your code as array of two strings: the numbers start and end. The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console the above described HTML list in the same format like the examples below. Don't add additional spaces. Whitespace and character casing are important, so please use the same as in the below examples.
Constraints
•	The numbers start and end are positive integers in the range [1…1 000 000 000] and start ≤ end.
•	Allowed working time for your program: 0.2 seconds.
•	Allowed memory: 16 MB.
Examples
Input	Output
5
8	<ul>
<li><span class='num'>5</span></li>
<li><span class='num'>6</span></li>
<li><span class='num'>7</span></li>
<li><span class='num'>8</span></li>
</ul>
11210
11215	<ul>
<li><span class='num'>11210</span></li>
<li><span class='rakiya'>11211</span><a href="view.php?id=11211">View</a></li>
<li><span class='rakiya'>11212</span><a href="view.php?id=11212">View</a></li>
<li><span class='num'>11213</span></li>
<li><span class='num'>11214</span></li>
<li><span class='num'>11215</span></li>
</ul>
55555
55560	<ul>
<li><span class='rakiya'>55555</span><a href="view.php?id=55555">View</a></li>
<li><span class='rakiya'>55556</span><a href="view.php?id=55556">View</a></li>
<li><span class='rakiya'>55557</span><a href="view.php?id=55557">View</a></li>
<li><span class='rakiya'>55558</span><a href="view.php?id=55558">View</a></li>
<li><span class='rakiya'>55559</span><a href="view.php?id=55559">View</a></li>
<li><span class='num'>55560</span></li>
</ul>


PROBLEM 2 - String Matrix Rotation

You are given a sequence of text lines. Assume these text lines form a matrix of characters (pad the missing positions with spaces to build a rectangular matrix). Write a program to rotate the matrix by 90, 180, 270, 360, … degrees. Print the result at the console as sequence of strings. Examples:
Input	Rotate(90)	Rotate(180)	Rotate(270)
hello
softuni
exam	 	 	 
 			
Input
The input is passed to the first JavaScript function found in your code as array of strings:
•	The first line holds a command in format "Rotate(X)" where X are the degrees of the requested rotation.
•	The next lines to the end contain the lines of the matrix for rotation.
The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console the rotated matrix as a sequence of text lines.
Constraints
•	The rotation degrees is positive integer in the range [0…90000], where degrees is multiple of 90.
•	The number of matrix lines is in the range [1…1 000].
•	The matrix lines are strings of length 1 … 1 000.
•	Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
Examples

Input	Output		Input	Output		Input	Output
Rotate(90)
hello
softuni
exam	esh
xoe
afl
mtl
 uo
 n 
 i 		Rotate(180)
hello
softuni
exam	   maxe
inutfos
  olleh		Rotate(270)
hello
softuni
exam	 i 
 n 
ou 
ltm
lfa
eox
hse

Input	Output		Input	Output		Input	Output
Rotate(720)
js
exam	js
exam
		Rotate(810)
js
exam	ej
xs
a
m		Rotate(0)
js
exam	js
exam




========================
Exam 29 July 2014
========================

PROBLEM 1 – Prices Trends

You are given a list of prices. Your task is to print them in a HTML table: the first column holds a price; the second column holds a trend. The trend is either fixed (no change) or moving up or moving down. Fixed is the trend of the first price and when the previous price is the same as the current price (after rounding). Moving up is when the current price is greater than the previous price (after rounding). Moving down is when the current price is less than the previous price (after rounding). All numbers are rounded to 2 digits after the decimal point. See the examples below for better understanding.
Input
The input is passed to the first JavaScript function found in your code as array of strings holding the input numbers. The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console the prices / trends HTML table following the examples below. The table has a fixed header defining 2 columns: Price and Trend. The prices column should hold the price, rounded to 2 decimal places. The trend is calculated after rounding (with 2 decimal places) and can be "fixed", "up" or "down". Whitespace and character casing are important, so please use the same as in the below examples.
Constraints
•	The count of input numbers is in the range [0…1 000].
•	All input numbers are in the range [0…1 000 000].
•	Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
Examples
Input	Output
50
60	<table>
<tr><th>Price</th><th>Trend</th></tr>
<tr><td>50.00</td><td><img src="fixed.png"/></td></tr>
<tr><td>60.00</td><td><img src="up.png"/></td></tr>
</table>

Input	Output
36.333
36.5
37.019
35.4
35
35.001
36.225	<table>
<tr><th>Price</th><th>Trend</th></tr>
<tr><td>36.33</td><td><img src="fixed.png"/></td></tr>
<tr><td>36.50</td><td><img src="up.png"/></td></tr>
<tr><td>37.02</td><td><img src="up.png"/></td></tr>
<tr><td>35.40</td><td><img src="down.png"/></td></tr>
<tr><td>35.00</td><td><img src="down.png"/></td></tr>
<tr><td>35.00</td><td><img src="fixed.png"/></td></tr>
<tr><td>36.23</td><td><img src="up.png"/></td></tr>
</table>


PROBLEM 2 - TETRIS FIGURES

In the classical Tetris game we have 7 Tetris figures (also called "tetriminos"), shown at the figure on the right: I, L, J, O, Z, S and T. You are given a rectangular Tetris game field consisting of full end empty cells. Your task is to write a JavaScript function to count the number of each of these 7 tetriminos (with overlapping, without rotations). For example, on the figure below we have a game field with 2 "I", 1 "L", 5 "J", 3 "O", 3 "Z", 4 "S" and 3 "T" figures on it.
-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-
-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o
o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-
-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-
-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-
The game field		2 pieces "I"		1 piece "L"		3 pieces "J"		+2 more pieces "J"
-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-		-	-	o	-	-	o	-
-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o		-	-	o	o	-	o	o
o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-		o	o	o	-	o	o	-
-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-		-	o	o	o	o	o	-
-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-		-	-	-	o	o	-	-
3 pieces "O"		3 pieces "Z"		3 pieces "S"		+ 1 more piece "S"		3 pieces "T"
Input
The input is passed to the first JavaScript function found in your code as array of strings holding the game field lines. Each game field line holds only two letters: '-' and 'o' (empty and full cells). All game field lines have the same length. The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console the number of I, L, J, O, Z, S and T tetriminos found in the game field (with overlapping and without rotations) as JSON string, in the same format like in the sample output below.
Constraints
•	The size of the game field is in the range [2…100].
•	All input lines have the same length and consist only of '-' and 'o' (empty and full cells).
•	Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
Examples
Input	Output
--o--o-
--oo-oo
ooo-oo-
-ooooo-
---oo--	{"I":2,"L":1,"J":5,"O":3,"Z":3,"S":4,"T":3}

Input	Output
-oo
ooo
ooo	{"I":0,"L":1,"J":2,"O":3,"Z":1,"S":2,"T":1}



PROBLEM 3 - BIGGEST TABLE ROW

You are given a HTML table of 4 columns: Town, Store1, Store2 and Store3. It consists of sequence of text lines: the "<table>" tag, the header row, several data rows, and "</table>" tag (see the examples below). The Store1, Store2, and Store3 columns hold either numbers or "-" (which means "no data"). Your task is to write a JavaScript function which parses the table data rows and finds the row with a maximal sum of its values.
Input
The input is passed to the first JavaScript function found in your code as array of strings holding the table lines. The input data will always be valid and in the format described. There is no need to check it explicitly.
Output
Print at the console a single line, holding the data row values with a maximal sum in format: "sum = value1 + values2 + …". Print the values exactly as they were found in the input (no rounding, no reformatting). If all rows contain no data, print "no data". If two rows have the same maximal sum, print the first of them.
Constraints
•	The count of input numbers is in the range [0…1 000].
•	The columns Store1, Store2 and Store3 hold numbers in the range [-100 0000…100 000].
•	There is no whitespace anywhere in the data rows.
•	Allowed working time: 0.2 seconds. Allowed memory: 16 MB.
Examples
Input	Output
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>
<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>
<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>
<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>
</table>	65.3 = 11.2 + 18.00 + 36.10

Input	Output
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>
</table>	no data

Input	Output
<table>
<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>
<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>
<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>
<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>
</table>	50000 = 50000.0

