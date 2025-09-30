function avg(score){
    var sum=0,average=0;
    for(var i=0;i<score.length;i++){
        sum +=score[i];
    }
    if(score.length>0){
        average=sum/score.length;
    }
return average;
}
//test
//var score=[90,80,70,60,50,144,64,88,44,35,12,09];
var score=[90,80,70,60,50,45,44,22,4,32];
console.log(score.toString+"average:"+avg(score));