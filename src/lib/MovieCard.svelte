<script>
    import { fade } from "svelte/transition";
    export let movie;
</script>

<a href="/film/{movie.id}" class="flex flex-col items-center mt-5" transition:fade>
    <img src={movie.image} alt={movie.title} class="w-1/2 rounded-md mb-3">
    <p class="font-bold">{movie.title}</p>
    <p class="text-slate-500">{movie.year}</p>
</a>