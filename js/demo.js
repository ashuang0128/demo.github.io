document.getElementById("form_task").addEventListener("submit",saveTask)

function saveTask(e){
    let name_cn = document.getElementById('add_info_name_cn').value
    let name_en = document.getElementById('add_info_name_en').value
    let sex1 = document.getElementById('add_info_sex1').value
    let sex2 = document.getElementById('add_info_sex2').value
    let phone = document.getElementById('add_info_phone').value
    let email = document.getElementById('add_info_email').value

    let task = {
        name_cn,
        name_en,
        sex1,
        sex2,
        phone,
        email
    }
    if(localStorage.getItem('tasks')===null){
        let tasks = []
        tasks.push(tasks)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(tasks)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    getTasks()
    document.getElementById('form_task').reset();
    e.preventDefault();
    
}

function deleteTask(){

    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].name_cn == name_cn){
            tasks.splice(i,1)
        }
        if(tasks[i].name_en == name_en){
            tasks.splice(i,1)
        }
        if(tasks[i].sex1 == sex1){
            tasks.splice(i,1)
        }
    }

    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTasks();
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('task'))
    let taskview = document.getElementById('taskview')
    taskview.innerHTML ="";

    for(let i=0; i<tasks.length; i++){
        let name_cn= tasks[i].name_cn
        let name_en= tasks[i].name_en
        let sex1= tasks[i].sex1
        let sex2= tasks[i].sex2
        let phone= tasks[i].phone
        let email= tasks[i].email


        taskview.innerHTML +=
        `<tr>
            <td data-bs-toggle="tooltip" title="">${name_cn}</td>
            <td>${name_en}</td>
            <td>${sex1}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>
                <button type="button" class="btn btn-success rounded-pill pill_type_new">編輯人員</button>
                <button type="button" class="btn btn-danger rounded-pill pill_type_new" onclick="deletetask('${name_cn}')">刪除人員</button>
            </td>
        </tr>`
    }
}