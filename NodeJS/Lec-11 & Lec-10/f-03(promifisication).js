function downloadFile(url, downloaded) {
    setTimeout(() => {
        downloaded(null,"downloaded")
    }, 3000) //faking a 3 sec download task
}

let d1=downloadFilePromise("http://cb.lk/file.txt")

// Promis-ification of async function
function downloadFilePromise (url) {
    return new Promise(function (resolve, reject) {
        downloadFile(url, function (err, data) {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                console.log(data);
                resolve(data)
            }
        })
    })
}