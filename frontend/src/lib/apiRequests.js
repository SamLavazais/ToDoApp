export async function getAllTasks() {
    let promise = await fetch("http://localhost:3000/tasks");
    console.log("resp: ", promise);
    let data = await promise.json();
    console.log("données : ", data);
    return data;
}

export async function deleteTask(task_id) {
    // requête fetch pour supprimer la tâche
    await fetch(
        `http://localhost:3000/tasks/${task_id}`,
        { method: "DELETE" }
    );
    // requête fetch pour éviter une désynchronisation
    return getAllTasks();
}