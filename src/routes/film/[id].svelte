<script context="module">
    export async function load({params}){
        const id = params.id;
        const url = `https://ghibliapi.herokuapp.com/films/${id}`;
        const res = await fetch(url);
        const movie = await res.json();
        return {props: {movie}}
    }
</script>

<script>
    export let movie;
</script>

<h1 class="text-2xl font-bold text-center my-10">{movie.title}</h1>
<div class="flex flex-col lg:flex-row my-5">
    <img src={movie.image} alt={movie.title} class="w-96 mx-auto">
    <div class="lg:ml-10">
        <h2 class="font-semibold text-xl mt-5 lg:mt-0">Release Year</h2>
        <p class="font-medium text-xl my-3">{movie.release_date}</p>
        <h2 class="font-semibold text-xl my-3">Overview</h2>
        <p class="text-justify my-3">{movie.description}</p>
        <h2 class="font-semibold text-xl my-3">Score</h2>
        <p class="text-justify my-3">{movie.rt_score}</p>
        <h2 class="font-semibold text-xl mb-3">Original Title</h2>
        <p class="text-justify my-3">{movie.original_title} ({movie.original_title_romanised})</p>
        <div class="flex flex-col lg:flex-row lg:space-x-52 mt-3">
            <div class="mb-3 lg:mb-0">
                <h2 class="font-semibold text-lg mb-1">{movie.director}</h2>
                <p class="text-slate-500 text-sm">Movie Director</p>
            </div>
            <div>
                <h2 class="font-semibold text-lg mb-1">{movie.producer}</h2>
                <p class="text-slate-500 text-sm">Movie Producer</p>
            </div>
        </div>
    </div>
</div>