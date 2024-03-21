<script>
    import { createEventDispatcher } from "svelte";
    let filter_toDo = false;
    const dispatch = createEventDispatcher();

    function updateFilters(filter_toDo) {
        dispatch("filters", { toDo: filter_toDo });
    }

    $: updateFilters(filter_toDo);
</script>

<div class="filtersBox">
    <h3>Filtres</h3>
    <div class="filter">
        <input
            type="checkbox"
            name="isDone"
            id="checkIsDone"
            bind:checked={filter_toDo}
        />
        <label for="checkIsDone">En attente seulement</label>
    </div>
</div>

<div class="filterList">
    <div class="filter">
        <!-- <input
                    type="checkbox"
                    name="isDone"
                    id="checkCurrentMonth"
                    bind:checked={filter_currentMonth}
                    />
                    <label for="checkIsDone">Mois en cours</label> -->
    </div>
</div>
