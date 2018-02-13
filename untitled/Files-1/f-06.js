/*function createPerson(name,age)
{
    return {
        name: name,             //Object is being returned
        age: age,               // Three items are not being returned;
     isAdult: function (){
            return(age>18)
        }
    }

}
let p1=createPerson("joe",12)
console.log(p1.isAdult());
console.log(p1);
*/
let a={p:10};
console.log(a);
let b=Object.create(a);
b.q=20;
console.log(b);
let c=Object.create(b);
c.r=30;
console.log(c);
console.log(b.p);
console.log(c.p);
console.log(c.q);
b.p++;
console.log(b);
c.q++;
console.log(c);
c.p++;
console.log(c);
b.__proto__.p=9;
console.log(a.p);
c.__proto__.__proto__.p=20;
console.log(a.p);
let d=c.__proto__.__proto__.__proto__;
console.log(d);
d.p=20;
console.log(d);
console.log(b.p);
console.log(c.__proto__.p);
console.log(c.__proto__.__proto__.p);
c.p=30;
console.log(a);
console.log(b);
console.log(c);
console.log(c.__proto__.__proto__.__proto__.__proto__);

