String.prototype.somefun=function(){
    console.log(this);
}
Array.prototype.filternums1=function(){
let i=0;
for(i=0;i<4;i++)
{
    if(typeof arr[i]=='number')
    {
      continue;
    }
    else{
        delete arr[i];
    }
}
 console.log(arr);
}
arr.filternums1();
console.log(arr);
/*
Array.prototype.filternums=function(){
    return this.filter( i => (typeof i== 'number' ));
}
let arr=[1,"asd",true,3,{a:10}];
arr.filternums();
console.log(arr.filternums());
*/
//Arrow Functions
let diff=(a,b)=> { return a-b;};             // Example of arrow functions
console.log(diff(4,2));
