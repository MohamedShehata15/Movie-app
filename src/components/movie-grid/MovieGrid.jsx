import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../movie-card/MovieCard";

import "./movie-grid.scss";

import tmdApi, { category, movieType, tvType } from "../../api/tmdbApi";
import Search from "../search/Search";
import CustomPagination from "../custom-pagination/CustomPagination";

const MovieGrid = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword == undefined) {
                let params = { page: page };
                if (props.category === category.movie) {
                    response = await tmdApi.getMoviesList(movieType.upcoming, {
                        params,
                    });
                } else {
                    response = await tmdApi.getTvList(tvType.popular, {
                        params,
                    });
                }
            } else {
                const params = { query: keyword };
                response = await tmdApi.search(props.category, { params });
            }
            setItems(response.results);
            console.log("-------totalPages-----");
            console.log(response);
            console.log("----------------");
            setTotalPage(response.total_pages);
        };
        getList();
    }, [props.category, keyword, page]);

    return (
        <>
            <div className="search mb-3">
                <Search category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {items.map((item) => (
                    <MovieCard
                        category={props.category}
                        item={item}
                        key={item.id}
                    />
                ))}
            </div>
            <CustomPagination setPage={setPage} totalPage={totalPage} />
        </>
    );
};

export default MovieGrid;
