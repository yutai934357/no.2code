var readline= require("readline-sync");

var row = readline.questionInt("How many row?");
var col = readline.questionInt("How many col?");

//2d Array row x col
var aryRowCol=[];
for (let r = 0; r < row; r++) {
    aryRowCol.push([]);
    for (let c = 0; c < col; c++) {
        aryRowCol[r].push(c)
    }
}