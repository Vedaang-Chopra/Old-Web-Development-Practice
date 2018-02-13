/*Syntatic sugar-More conventional to write (here classes)*/
class Person{
    constructor(name ,age) {
        this._name = name;                                               // Here we made name to _name as it can be used either as object or as setter
        this.nick=name.split(" ")[0] ;
        this.age = age;

        this.greet = function () {
            return hello$(this.name);
        }
    }
    getFirstname(){
        return this.name.split(" ")[0];
    }
    get lastname(){
        return this.name.split(" ")[1];             // Accesor-A data member is created no taking any memory but easily works on other members
    }
    get name(){
        return this._name;                                   // This getter is used to get  name
    }
    set name(val){
        this._name=val;
        this.nick=_name.split(" ")[0];
    }
}
let p=new Person("harry potter",18);
console.log(p);
console.log(p.getFirstname());
console.log(p.lastname);

/*function Person(name ,age){
        this.name=name;
        this.age=age;
        this.getFirstname = function(){
        return this.name.split(" ")[0];
    }
}
let p=new Person("harry potter",18);
console.log(p);
console.log(p.getFirstname());*/
/* uneval and to source*/