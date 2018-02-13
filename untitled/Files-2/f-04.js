var a=true;
setTimeout(()=>{
    a=false;
},1000)
while(a)
{
    console.log('a');
}
/*********************************/
var a=true;
setTimeout(()=>{
    a=false;
},0)                                               //This is an infinite loop.Even though a in setTimeout is set false
whlie(a)                                           //But in message queue the setTimeout statement is after the while loop
{                                                  // thus it is never executed and while loop never breaks
    console.log('a');
}
