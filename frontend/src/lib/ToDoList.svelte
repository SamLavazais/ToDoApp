<script>
    import ToDoRow from "./ToDoRow.svelte";
    export let tasksList;

    // export let filters;
    $: tasksListToDisplay = tasksList.slice(0);
</script>

<div id="tasksListBox">
    {#each tasksListToDisplay as task}
        <ToDoRow {task} on:delete on:complete />
    {/each}
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
