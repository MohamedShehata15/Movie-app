import { Link } from "react-router-dom";

import { UnderlineButton } from "../components/button/Button";
import Hero from "../components/hero/Hero";
import { category, movieType, tvType } from "../api/tmdbApi";
import MovieList from "../components/movie-list/MovieList";

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <UnderlineButton className="small">
                                View More
                            </UnderlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.popular}
                    />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>On TV</h2>
                        <Link to="/movie">
                            <UnderlineButton className="small">
                                View More
                            </UnderlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.tv}
                        type={tvType.on_the_air}
                    />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <UnderlineButton className="small">
                                View More
                            </UnderlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Coming Soon</h2>
                        <Link to="/movie">
                            <UnderlineButton className="small">
                                View More
                            </UnderlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.upcoming}
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
