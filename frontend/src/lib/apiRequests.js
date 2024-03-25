export async function getAllTasks() {
    let promise = await fetch("http://localhost:3000/tasks");
    console.log("resp: ", promise);
    let data = await promise.json();
    console.log("données : ", data);
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
