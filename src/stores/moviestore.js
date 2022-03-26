import { writable } from "svelte/store";

export const movies = writable([])


const fetchMovie = async () => {
    const url = `https://ghibliapi.herokuapp.com/films`;
    const res = await fetch(url);
    const data = await res.json();
    const movie = data.map((data, index) => {
        return {
            id: data.id,
            title: data.title,
            image: data.image,
            year: data.release_date
        }
    });
    movies.set(movie);
};

fetchMovie();