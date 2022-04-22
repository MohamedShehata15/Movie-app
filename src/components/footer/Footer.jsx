import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">
                            <i className="fa-solid fa-video fa-4x"></i>
                        </Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <p>
                            5th Avenue st, manhattan <br />
                            New York, NY 10001
                        </p>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Movies</Link>
                        <Link to="/">TV Series</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">My Account</Link>
                        <Link to="/">watchlist</Link>
                        <Link to="/">Collections</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
