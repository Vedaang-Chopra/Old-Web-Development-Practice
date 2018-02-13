/*console.log(this);
console.log(process.env.TEMP);      // used to call enviornment varriables
this.a=10;
function alpha()
{
    console.log(this==global)
    this.b=20;
    console.log(this.a);

}
function beta()
{
    this.c=30;
    console.log(this.a);
    console.log(this==global);

}
console.log(this);
alpha();
beta();
*/

// Lexical Scoping-Here this of alpha points to global doesn't matter where it is and this of obj points to obj

function alpha()
{
    this.a=10;      //here its alpha namespace
    }
 let obj={
    p:10,
     Q:20,
    r:function (){
        console.log(this);      //here its object namespace
        alpha();            //even after calling it refers this of the function refers to global namespace
    }

 }
obj.r();
console.log(obj.a);
console.log(a);
