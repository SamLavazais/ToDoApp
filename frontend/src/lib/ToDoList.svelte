<script>
    import TasksList from "../classes/TasksList";
    import ToDoRow from "./ToDoRow.svelte";
    export let filters;

    async function getAllTasks() {
        let promise = await fetch("http://localhost:3000/tasks");
        console.log("resp: ", promise);
        let data = await promise.json();
        console.log("données : ", data);
        console.log(new TasksList(data));
        return new TasksList(data);
    }
    let promise = getAllTasks();
</script>

<div id="tasksListBox">
    {#await promise then tasksList}
        {#each tasksList.tasks as task}
            {#if !filters.toDo || (filters.toDo && !task.is_completed)}
                <ToDoRow {task} />
            {/if}
        {/each}
    {/await}
</div>

<style>
    #tasksListBox {
        max-width: 100%;
        padding: 0.5rem;

        display: flex;
        flex-flow: column;
        align-content: center;
    }
</style>
