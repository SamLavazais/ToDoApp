<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function createTask() {
        dispatch("create", {
            task_id: "fdsfgfg",
        });
    }

</script>

<button on:click={createTask}>Créer une tâche</button>
