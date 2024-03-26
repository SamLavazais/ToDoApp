<script>
    import Filters from "./lib/Filters.svelte";
    import NewTodo from "./lib/NewTodo.svelte";
    import ToDoList from "./lib/ToDoList.svelte";
    import { getAllTasks, deleteTask, completeTask, createTask } from "./lib/apiRequests";
    import Header from "./lib/header.svelte";

    let tasksListPromise = getAllTasks();

    function handleDelete(event) {
        tasksListPromise = deleteTask(event.detail.task_id);
    }

    function handleComplete(event) {
        tasksListPromise = completeTask(
            event.detail.task_id,
            event.detail.is_completed
        );
    }

    function handleCreate(event) {
        tasksListPromise = createTask(event.detail.newTask);
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
    <NewTodo on:create={handleCreate} />
    {#await tasksListPromise then tasksList}
        <ToDoList
            {tasksList}
            on:delete={handleDelete}
            on:complete={handleComplete}
        />
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
