console.log("lib run");
function sum(a,b){
    return a+b;
}
console.log(sum(5,6));
exports=module.exports={       //For exporting module.export is exported.Thus when export{sum:sum} is done error appears as
    sum:sum                     //module.export value is changed but export remains same.
}

console.log(sum(11,7));

// class name{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//         console.log(name);
//         console.log(age);
//
//     }
// }
// module.exports.name=name;
// exports=module.exports;