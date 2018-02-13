/*
console.log((parseInt(process.argv[2])+parseInt(process.argv[3])));
console.log((+process.argv[2])+(process.argv[3]));
*/
const fs=require('fs');
/*
fs.writeFile(
    __dirname + '/file.txt',
    "Hello this is my first example of writing a file using nodejs",
    function()
        {
                console.log("Yo we have written a file");
             }
);
*/
fs.readFile(
    __dirname+'/file.txt',
    function(err,data){
        if(err) throw err;// to crash a program on error
        console.log("File has been read");
        console.log(data.toString());
    }
);
fs.readFile(
    __dirname+'/file.txt',
    function(err,data){
        if(err)
            console.error("File could not be read")// to run the program further
        console.log("File has been read");
        console.log(data.toString());
    }
);