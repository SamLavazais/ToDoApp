import Task from "./Task.js";

export default class TasksList {
    #currentId;

    constructor(tasks) {
        this.tasks = tasks.map((task) => new Task(
                                            task.task_id,
                                            task.title,
                                            task.is_completed,
                                            task.deadline,
                                            task.category
                                            )
        );
        this.tasksCount = tasks.length;
    }

    addTask(taskName, deadline) {
        let newTask = new Task(this.#currentId, taskName, deadline);
        this.tasks.push(newTask);
        this.#currentId++;
        this.tasksCount = this.tasks.length;
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        return this.tasks;
    }

    defaultSort() {
        return this.tasks.sort((a, b) => {
            if (a._dmonth === b._dmonth) return a._dday - b._dday;
            else return a._dmonth - b._dmonth;
        });
    }

    // filter(filters) {
    //     let filteredList = this.tasks;
    //     for (filter of filters)
    //     console.log(filteredList)
    //     if (filters.filter_toDo) {
    //         filteredList = filteredList.filter((task) => !task.is_completed);
    //     }
    //     console.log(filteredList)
    //     return filteredList;
    // }
}

/*
tasks = []
length

createTask(params)
deleteTask(params)
updateTask(params)
sortTasks(paramas)
filterTasks(params)


*/
