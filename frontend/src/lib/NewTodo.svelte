<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let newTitle;
    let category;
    let deadline;
    let is_important;

    $: validForm = newTitle && category && deadline;

    function createTask() {
        if (newTitle) {
            dispatch("create", {
                newTask: {
                    title: newTitle,
                    category: category ?? "noCat",
                    deadline: deadline ?? "2021-12-01",
                    is_important: false,
                },
            });
        }
    }
</script>

<!-- 1) sélectionner le titre du Todo -->
<div id="newTaskBox">
    <div id="NewTaskBoxHeader">Nouvelle Tâche</div>
    <div id="NewTaskBoxForm">
        <label for="newTitle">Titre :</label>
        <input
            name="newTitle"
            type="text"
            placeholder=""
            bind:value={newTitle}
        />
        <label for="category">Catégorie :</label>
        <input
            name="category"
            type="text"
            placeholder=""
            bind:value={category}
        />
        <label for="deadline">Date :</label>
        <input
            name="deadline"
            type="date"
            placeholder=""
            bind:value={deadline}
        />
        <label for="priority">Prioritaire :</label>
        <input name="priority" type="checkbox" bind:checked={is_important} />
    </div>
    <button disabled={!validForm} id="submitBtn" on:click={createTask}>
        Ajouter</button
    >
    {#if !validForm}
        <div id="error" style="color:red">
            Merci de remplir tous les champs (seul prioritaire est facultatif).
        </div>
    {/if}
</div>

<style>
    #newTaskBox {
        max-width: 40rem;
        background-color: rgb(229, 201, 255);
        border-radius: 5px;
        padding: 1rem 1rem 1rem 1rem;
    }
    #NewTaskBoxHeader {
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 1rem;
    }
    #NewTaskBoxForm {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 3fr;
        column-gap: 15px;
        row-gap: 10px;
    }
    input {
        border: none;
    }
    button {
        margin-top: 1rem;
        text-align: center;
    }
    #error {
        display: inline;
    }
</style>
