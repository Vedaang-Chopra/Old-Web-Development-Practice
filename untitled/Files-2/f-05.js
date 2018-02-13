let intervalId=setInterval(()=>{
    console.log('a');
},0);
setTimeout(()=>{
    clearInterval(intervalId);
},100);
console.log('yo')
console.log(new Date().getTime())
setTimeout(function () {
    console.log(new Date().getTime())
    console.log('hello')
}, 0)
console.log('world')
console.log('wassup')


