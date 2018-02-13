let p=new Promise(function(resolve ,reject){
   setTimeout(()=>{
       resolve;

    } ,3000);
});
function downloadFile(url) {
    return new Promise(function (resolve,reject) {
        setTimeout(()=>{
            if(url.startsWith("http"))
            resolve("downloaded-data");
            else
                reject("Error received")

        } ,3000);
    });
}
let dl=downloadFile("//cb.lk/file.txt")
    .then(function (data) {
        console.log(data);
})
    .catch(function(err){
        console.log(err);
    }
    );