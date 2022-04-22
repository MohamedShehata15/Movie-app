import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

import "./movie-list.scss";

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== "similar") {
                if (props.category === category.movie) {
                    response = await tmdbApi.getMoviesList(props.type, {
                        params,
                    });
                } else {
                    response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Splide
                className="slide"
                aria-label="My Favorite Images"
                options={{
                    // perPage: 6,
                    arrows: false,
                    type: "loop",
                    autoplay: true,
                    pagination: false,
                    drag: "free",
                    rewind: true,

                    gap: "1rem",
                    perPage: 5,
                    breakpoints: {
                        1460: {
                            perPage: 4,
                        },
                        1024: {
                            perPage: 3,
                        },
                        767: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 2,
                        },
                    },
                }}
            >
                {items.map((item) => (
                    <SplideSlide key={item.id}>
                        <MovieCard
                            key={item.id}
                            item={item}
                            category={props.category}
                            onDragStart={handleDragStart}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default MovieList;
