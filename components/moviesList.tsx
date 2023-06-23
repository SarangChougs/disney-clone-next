
import Movies from "./movies";
import { getMoviesTypeDataArray } from "../lib/data";
import { useEffect, useRef, useState } from "react";

export default function MoviesList() {
    const shouldUseEffect = useRef(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (shouldUseEffect.current) {
            shouldUseEffect.current = false;
            setMovies(getMoviesTypeDataArray());
        };
    }, [movies]);

    return (
       <>
       <Movies title="Recommended for You" movies={movies[0]}/>
       <Movies title="New to Disney+" movies={movies[1]}/>
       <Movies title="Originals" movies={movies[2]}/>
       <Movies title="Trending" movies={movies[3]}/>
       </>
    );
}