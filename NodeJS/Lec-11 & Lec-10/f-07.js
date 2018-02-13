function downloadFile(url, downloaded) {
    setTimeout(() => {
        downloaded(null, "DATA DOWNLOADED")
    }, 2000)
}

function encrypt(data, encrypted) {
    setTimeout(() => {
        encrypted(null, `{{{${data}}}}`)
    }, 1000)
}

function saveFile(data, saved) {
    setTimeout(() => {
        saved(null, true)
    }, 2000)
}
async function getFile() {
    try {
        let dldata = await downloadFile('1');     //Await  can only be called in ana async function
        console.log(dldata);
        let encdata = await encrypt(dldata);
        console.log(encdata);
        let saveddata = await saveFile(encdata);
        console.log(saveddata);
    }catch(e){
        console.log(e);
    }

}
getFile()