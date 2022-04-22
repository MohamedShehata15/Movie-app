import "./hero.scss";

import hero from "../../assets/hero.jpg";
import Button from "../button/Button";

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero__wrapper container">
                <div className="hero__wrapper__content">
                    <h2 className="title">Spider-Man: No Way Home</h2>
                    <p className="overview">
                        Peter Parker is unmasked and no longer able to separate
                        his normal life from the high-stakes of being a
                        super-hero. When he asks for help from Doctor Strange
                        the stakes become even more dangerous, forcing him to
                        discover what it truly means to be Spider-Man.
                    </p>
                    <div className="btns_wrapper">
                        <Button>Watch Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
