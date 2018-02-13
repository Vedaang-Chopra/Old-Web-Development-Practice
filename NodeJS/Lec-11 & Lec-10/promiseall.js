// function downloadFile(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("DATA DOWNLOADED" + url)
//         }, 2000)
//     })
// }
//
// function encrypt(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`{{{${data}}}}`)
//         }, 1000)
//     })
//
// }
//
// function saveFile(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`saved: ${data}`)
//         }, 2000)
//     })
// }
// Promise.all([downloadFile('1'), downloadFile('2'), downloadFile('3')])       //This calls functions parallely
//     .then((results) => Promise.all(results.map(d => encrypt(d))))
//     .then((encDataArr) => Promise.all(encDataArr.map(e => saveFile(e))))
//     .then(savedResults => console.info(savedResults))
//     .catch(e => console.error(e))
function nameandnumber(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Name"+"1234");

        },1000);
    })
}
Promise(nameandnumber("vedaang").then((print)=>{
    console.log(print);
}));