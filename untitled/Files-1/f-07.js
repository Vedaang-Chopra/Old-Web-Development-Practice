
//Concept of Auto boxing -Creating objects using this operator
function Person(name,age){
    this.name=name;
    this.age=age;
}
this.name="joe";
this.age=22;
console.log(this.name);
console.log(this.age);
let p =new Person("jack",12);
//After the previous step this keyword used in function Person helps to
//members created in p object
console.log(p.name);
console.log(p.age);