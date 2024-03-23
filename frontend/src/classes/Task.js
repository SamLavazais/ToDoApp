export default class Task {
    #task_id;

    constructor(task_id, title, is_completed, deadline, category = "noCat") {
        this.#task_id = task_id;
        this.title = title;
        this.is_completed = is_completed;
        this._deadline = deadline;
        this.category = category;
        // this.rank = id;
        // this.subTasks = [];
    }

    get task_id() {
        return this.#task_id;
    }

    set title(newtitle) {
        this._title = newtitle
            ? newtitle
            : this._title
            ? this._title
            : "new task";
    }

    get title() {
        return this._title;
    }

    get deadline() {
        return this._deadline.slice(8, 10) + "/" + this._deadline.slice(5, 7); // + '/' + this._deadline.slice(0,4)
    }

    // get deadline() {
    //     let dayString =
    //         this._deadline.getDate() < 10
    //             ? `0${this._deadline.getDate()}`
    //             : this._deadline.getDate();
    //     let monthString =
    //         this._deadline.getMonth() < 10
    //             ? `0${this._deadline.getMonth()}`
    //             : this._deadline.getMonth();
    //     return `${dayString}/${monthString}`;
    // }

    // updateDeadline(day, month, year) {}

    // addSubTask(newSubTask) {
    //     this.subTasks.push(newSubTask);
    // }

    // deleteSubTask(subTaskToDelete) {
    //     this.subTasks.filter((subtask) => subtask === subTaskToDelete);
    // }

    // updateRank(newRank){}

    /*
    modifier le nom
    valider/dévalider la tâche
    indiquer une deadline (SET) : sous quel format ?
    modifier la deadline
    modifier la category
    ajouter une sous-tâche
    supprimer une sous-tâche
    */
}
