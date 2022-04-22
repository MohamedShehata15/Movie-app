import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import { OutlineButton } from "../button/Button";
import "./search.scss";

const Search = (props) => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/${category[props.category]}/search/${keyword}`);
        }
    }, [keyword, props.category, navigate]);

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        };
        document.addEventListener("keyup", enterEvent);
        return () => {
            document.removeEventListener("keyup", enterEvent);
        };
    });

    return (
        <div className="movie-search">
            <input
                type="text"
                placeholder="Type a movie name"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <OutlineButton className="small" onClick={goToSearch}>
                Search
            </OutlineButton>
        </div>
    );
};

export default Search;
