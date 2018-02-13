
function sum(numArr){

    return numArr.reduce((accum,item)=>accum+item);
}
let sum1=sum([3]);
let sum2=sum([3,6]);                                    // Spreading
let sum3=sum([3,2,8]);
console.log(sum1);
console.log(sum2);
console.log(sum3);
/* Both functions are same*/
function sum(...numArr){                                           //This tells the commpiler about the series of integer coming
return numArr.reduce((accum,item)=>accum+item);
}
let sum1=sum([3]);
let sum2=sum([3,6]);
let sum3=sum([3,2,8]);                                              //Resting
console.log(sum1);
console.log(sum2);
console.log(sum3);



/*..............................................................................................................*/
function diff(a,b,c)
{
    return b*b-4*a*c;
}
let coeff=[4,8,2];
console.log(diff(...coeff));

