<script>
    import {movies} from "../stores/moviestore";
    import MovieCard from "$lib/MovieCard.svelte";
    let searchTerm = "";
    let filteredMovie = [];

    $: {
        if(searchTerm) {
            filteredMovie = $movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredMovie = [...$movies];
        }
    }

</script>

<div>
    <h1 class="text-2xl font-medium text-center py-7 capitalize italic">Studio Ghibli Movies</h1>
    <input bind:value={searchTerm} class="border-2 placeholder:italic placeholder:text-slate-400 w-full py-3 px-4 shadow-sm rounded-md focus:outline-none focus:border-sky-300 mb-3" type="text" placeholder="Search for a movie...">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredMovie as movie}
            <MovieCard {movie}/>
        {/each}
    </div>
</div>