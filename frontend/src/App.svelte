<script>
    import Filters from "./lib/Filters.svelte";
    import ToDoList from "./lib/ToDoList.svelte";
    import { getAllTasks, deleteTask } from "./lib/apiRequests";
    import Header from "./lib/header.svelte";

    let tasksListPromise = getAllTasks();

    function handleDelete(event) {
        tasksListPromise = deleteTask(event.detail.task_id);
    }
    
    // let filters = { toDo: false}
    // function handleFilters(event) {
    //     filters = event.detail
    // }
</script>

<div id="leftPanel">
    <Header />
    <Filters />
    <!-- on:filters={handleFilters} -->
    {#await tasksListPromise}
        <div>Les tâches sont en train de charger...</div>
    {:then tasksList}
        <ToDoList {tasksList} on:delete={handleDelete} />
        <!-- filters={filters} -->
    {/await}
</div>

<style>
    #leftPanel {
        max-width: 700px;
        padding: 1rem;

        display: grid;
        justify-items: center;
    }
</style>
