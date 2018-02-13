/*for(let i=0;i<5;i++)
{
    setTimeout(function(){
        console.log(i)
    },1000)
}
for(let i=0;i<5;i++)
{
    setTimeout(function(){
        console.log(i)
    },1000*i)
}*/
/*for( var i=0;i<5;i++)
{
    (function(){
        setTimeout(function(){
            console.log(i)
        },1000*i)
    })();
}*/
// for(var i=0;i<5;i++)
// {
//     (function(j){                                       //IIFE-EXpression
//         setTimeout(function(){
//             console.log(j)
//         },1000*i)
//     })(i);
// }
for( var i=0;i<5;i++)
{
    (function(i){                                       //IIFE-EXpression
        setTimeout(function(){
            console.log(i)
        },1000*i)
    })(i);
}
for(var i=0;i<5;i++)
{
    (i =>setTimeout(()=>console.log(i),1000*i))(i)
}