let list= null;
let listElements = [];

window.onload = function () {
    list = document.getElementById('list');
    let addNewTodo = document.getElementById('add-new-todo');
    let addBtn = document.getElementById('add-btn');
    let delBtn = document.getElementById('del-btn');


    addBtn.onclick = function () {
        let todoValue = addNewTodo.value;
        addTodo(todoValue);
        showTodos();

    }

    function showTodos() {
        list.innerHTML="";
        let i=0;
        for(i in listElements){
            addListItem(listElements[i].task,listElements[i].done,i);
        }
    }

    function addListItem(todoValue,done,id){
        let newListItem = document.createElement('li');
        newListItem.setAttribute('data-id',id);
        newListItem.className = 'list-group-item';

        let checkBox = document.createElement('input');
        checkBox.className = 'col-1';
        checkBox.setAttribute('type','checkbox');
        checkBox.onchange = strikeSpan;

        let span = document.createElement('span');
        span.className = 'col-8';
        span.innerText = todoValue;
        if(done){
            checkBox.setAttribute('checked',true);
            span.style.textDecoration = 'line-through';
        }


        let deleteBtn = document.createElement('i');
        deleteBtn.className = 'col-1 fa fa-times';
        deleteBtn.onclick = deleteTodo;

        let moveUpBtn = document.createElement('i');
        moveUpBtn.className = 'col-1 fa fa-chevron-up';
        moveUpBtn.onclick = moveUp;

        let moveDownBtn = document.createElement('i');
        moveDownBtn.className = 'col-1 fa fa-chevron-down';
        moveDownBtn.onclick = moveDown;

        newListItem.appendChild(checkBox);
        newListItem.appendChild(span);
        newListItem.appendChild(deleteBtn);
        newListItem.appendChild(moveUpBtn);
        newListItem.appendChild(moveDownBtn);

        list.appendChild(newListItem);

    }

    function addTodo(todoTask) {
        let newTask = {
            task: todoTask,
            done: false
        }

        listElements.push(newTask);
    }
 delBtn.onclick=function (){
    for(var i=0;i<listElements.length;i++)
    {
       if(listElements.done==true)
        {
            listElements.splice(i,1);
        }
    }
    console.log(listElements);
    showTodos();
}

delBtn.onclick=function(){
    let sqr={};
    for(i in listElements)
    {
    sqr=listElements.filter(function(item,size,array)
        {
        return  ((item.done!=true) ? item : undefined);
    });

    }
    showTodos();
}
function deleteTodo(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements.splice(index,1);
    showTodos();
}
function moveUp(event){
    let index = event.target.parentElement.getAttribute('data-id');
    let index1;
    index1 = index - 1;
    let temp={};
    temp=listElements[index1];
    listElements[index1]=listElements[index];
    listElements[index]=temp;
    showTodos();
}
function moveDown(event) {
    let index = parseInt(event.target.parentElement.getAttribute('data-id'));
    let index1;
    index1 = index + 1;
    let temp;
    temp = listElements[index];
    listElements[index] = listElements[index1];
    listElements[index1] = temp;
    console.log(listElements);
    // showTodos();
}

function strikeSpan(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements[index].done = event.target.checked;
    showTodos();
}
}