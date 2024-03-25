<script>
    import { createEventDispatcher } from "svelte";
    export let task;

    const dispatch = createEventDispatcher();

    function deleteTask() {
        dispatch("delete", {
            task_id: task.task_id,
        });
    }
</script>

<div class="todoRow {task.is_completed ? 'isDone' : ''}">
    <input type="checkbox" class="checkBox" bind:checked={task.is_completed} />
    <div class="todoTitle">{task.title}</div>
    <div class="todoCat">{task.category ?? "no category"}</div>
    <div class="todoDeadline">{task.deadline ?? "no deadline"}</div>
    <button on:click={deleteTask}>X</button>
</div>

<style>
    .todoRow {
        display: grid;
        grid-template-columns: 1fr 7fr 1fr 1fr 1fr;
        column-gap: 1em;
        align-items: center;

        margin: 0.8em 0 0.8em 0;
        padding: 0.5em 0.5em 0.5em 0;
        border: 1px solid black;
        border-radius: 0.5em;
    }

    .checkBox {
        height: 1.2rem;
    }

    .isDone {
        text-decoration: line-through;
    }
</style>
