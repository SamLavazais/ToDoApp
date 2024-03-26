export async function getAllTasks() {
    let promise = await fetch("http://localhost:3000/tasks");
    // console.log("resp: ", promise);
    let data = await promise.json();
    // console.log("données : ", data);
    data = data.map((task) => {
        task.deadline =
            task.deadline.slice(8, 10) + "/" + task.deadline.slice(5, 7);
        return task;
    });
    return data;
}

export async function deleteTask(task_id) {
    // requête fetch pour supprimer la tâche
    await fetch(`http://localhost:3000/tasks/${task_id}`, { method: "DELETE" });
    // requête fetch pour éviter une désynchronisation
    return getAllTasks();
}

export async function completeTask(task_id, is_completed) {
    // requête fetch PUT
    await fetch(`http://localhost:3000/tasks/${task_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ is_completed: is_completed }),
    });
    // update fetch GET
    return getAllTasks();
}

export async function createTask(newTask) {
    // requête fetch POST
    await fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newTask),
    });

    return getAllTasks();
}
