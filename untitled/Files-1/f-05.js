let arr=[{1,true},2,3,4,5,6,7,8,9];
let sqr=arr.filter(function(item,size,array){
    return ((item % 2 == 0) ? item : undefined);

});
console.log(sqr);
/*
let sqar=arr.reduce(function(accum,item,index,array){
    console.log(index);
    console.log(accum);
    console.log(item);
    console.log(item +accum);
    return item+accum;
});
console.log(sqar);
*/