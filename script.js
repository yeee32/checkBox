let myToDos = [{
    text: "Vynest kos",
    done: false
},{
    text: "Nakoupit",
    done: false
},{
    text: "Uklidit",
    done: true
},{
    text: "Nakrmit psa",
    done: true
},{
    text: "Umyt nadobi",
    done: false
}]


bodyElement.onload = function() {
   for(let i = 0; i < myToDos.length; i++){
     let task = document.createElement("p")
     task.id = "task";
     task.textContent = myToDos[i].text
     document.body.appendChild(task);
    }
}

checkBoxes.onclick = function() {
    for(let i=0; i<myToDos.length;i++){
        let taskCheckBox = document.createElement("input");
        taskCheckBox.type="checkbox";
        document.body.appendChild(taskCheckBox);

        let taskLabel = document.createElement("label");
        taskLabel.textContent=myToDos[i].text;
        document.body.appendChild(taskLabel);
        
    }
    let newLine = document.createElement("br");
    document.body.appendChild(newLine);
}


checkCheckBox.onclick = function(){
    for(let i=0; i<myToDos.length;i++){


        let taskCheckBox = document.createElement("input");
        taskCheckBox.type="checkbox";
        taskCheckBox.checked=myToDos[i].done;
        document.body.appendChild(taskCheckBox);

        let taskLabel = document.createElement("label");
        taskLabel.textContent=myToDos[i].text;
        document.body.appendChild(taskLabel);
    }
    let newLine = document.createElement("br");
    document.body.appendChild(newLine);
}

onlyToDo.onclick = function(){
    
    for(let i=0; i<myToDos.length;i++){
        if(myToDos[i].done == false){
            let taskCheckBox = document.createElement("input");
            taskCheckBox.type="checkbox";
            taskCheckBox.checked=myToDos[i].done;
            document.body.appendChild(taskCheckBox);
    
            let taskLabel = document.createElement("label");
            taskLabel.textContent=myToDos[i].text;
            document.body.appendChild(taskLabel);
        }

    }
    let newLine = document.createElement("br");
    document.body.appendChild(newLine);
}

howManyToDo.onclick = function(){
    let taskLeftNumber = 0;
    for(let i=0; i<myToDos.length;i++){
        if(myToDos[i].done == false){
            taskLeftNumber++;
        }
    }
    let tasksLeft = document.createElement("p");
    tasksLeft.textContent = `zbýva: ${taskLeftNumber}`;
    document.body.appendChild(tasksLeft);


    let newLine = document.createElement("br");
    document.body.appendChild(newLine);
}
