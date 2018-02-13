/*function createcounter() {
    let x=0;
    function count()
    {
        return ++x;
    }
    return count;
}
let mycounter=createcounter();
console.log(mycounter());
console.log(mycounter());
*/



let arr=[1,2,3];
let sqr = arr.map(function (item, index, array) {
     if(index==arr.length)
     {
          return item;
     }
     else {
         var b = arr[index + 1];
         item = item + b;
         return item;
     }

});
console.log(sqr);
/*
let sqar=arr.map(function(item,size,array){
    return ((arr.length)-size)
});
console.log(sqar);
*/