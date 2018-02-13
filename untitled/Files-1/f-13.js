let i;
let data;
window.onload = function () {

    let fizzbuzz1 = document.getElementById('fizzbuzz');
    let normal1 = document.getElementById('normal');
    normal1.onclick = function () {
        let list = document.getElementById("list");
        for (i = 0; i < 1000; i++) {
            let item = document.createElement("li");
            let data=document.createTextNode(i);
            console.log(item.value);
            item.appendChild(data);
            list.appendChild(item);
        }
    }

    fizzbuzz1.onclick = function () {
        let list = document.getElementById("list");
        for (i = 0; i < 1000; i++) {
            if (i % 3 == 0) {
                 data= "fizz";
            }
            else if (i % 5 == 0) {
                 data = "buzz";
            }
            if (i % 3 == 0 && i % 5 == 0) {
                data = "fizzbuzz";
            }
            else {
                let data = i;
            }
            let item = document.createElement("li");
            let input = document.createTextNode(data);
            console.log(data);
            item.appendChild(input);
            list.appendChild(item);
        }
    }

}