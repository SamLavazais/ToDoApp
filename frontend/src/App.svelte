<script>
    import Filters from "./lib/Filters.svelte";
    import ToDoList from "./lib/ToDoList.svelte";
    import Header from "./lib/header.svelte";

    let filters = { toDo: false}

    function handleFilters(event) {
        filters = event.detail
    }
</script>

<div id="leftPanel">
    <Header />
    <Filters on:filters={handleFilters}/>
    <ToDoList filters={filters}/>
</div>

<style>
    #leftPanel {
        max-width: 700px;
        padding: 1rem;

        display: grid;
        justify-items: center;
    }
</style>
