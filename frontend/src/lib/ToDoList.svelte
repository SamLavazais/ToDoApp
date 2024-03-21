<script>
    import ToDoRow from "./ToDoRow.svelte";
    export let filters;

    async function getTasks() {
        let promise = await fetch("http://localhost:3000/tasks");
        console.log("resp: ", promise);
        let data = await promise.json();
        console.log("données : ", data);
        return data;
    }

    let promise = getTasks();
</script>

<div id="tasksListBox">
    {#await promise then tasks}
        {#each tasks as task}
            {#if (filters.toDo && task.completed) || !filters.toDo}
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
