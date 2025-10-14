var Score = [
    [70, 80, 90, 60, 80],
    [80, 90, 70, 75, 85],
    [85, 85, 80, 90, 80],
];

// 計算每個子陣列的平均值
for (var i = 0; i < Score.length; i++) {
    let sum = 0;
    // 遍歷每個子陣列中的分數
    for (var j = 0; j < Score[i].length; j++) {
        sum += Score[i][j];
    }
    // 計算平均值
    var average = sum / Score[i].length;
    console.log(`Score[${i}] 的平均值: ${average}`);
}

// 輸出 Score[0] (原本程式碼中的輸出)
console.log("Score[0]=" + Score[0]);