<script>
    export let task;
</script>

<div class="todoRow {task.completed ? 'isDone' : ''}">
    <input type="checkbox" class="checkBox" bind:checked={task.completed} />
    <div class="todoTitle">{task.title}</div>
    <div class="todoCat">{task.category ?? "categorie"}</div>
    <div class="todoDeadline">{task.deadline ?? "deadline"}</div>
</div>

<style>
    .todoRow {
        display: grid;
        grid-template-columns: 1fr 7fr 1fr 1fr;
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
