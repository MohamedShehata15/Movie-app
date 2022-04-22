import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./sidebar.scss";

const sidebarNav = [
    {
        display: "Home",
        path: "/",
        icon: "fa-solid fa-house",
    },
    {
        display: "Movies",
        path: "/movie",
        icon: "fa-solid fa-clapperboard",
    },
    {
        display: "Tv Series",
        path: "/tv",
        icon: "fa-solid fa-tv",
    },
];

const debounce = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    };
};

const Sidebar = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    const { pathname } = useLocation();
    const indicatorRef = useRef(null);
    const activeLink = useRef(null);

    useEffect(() => {
        if (activeLink.current) {
            indicatorRef.current.style.top = `${
                activeLink.current.getBoundingClientRect().top
            }px`;
            indicatorRef.current.classList.remove("hidden");
        }
    }, [dimensions]);

    useEffect(() => {
        const debouncedHandleResize = debounce((_) => {
            // Handle Resize Function.
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);

        return (_) => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    const active = sidebarNav.findIndex((e) => e.path === pathname);

    const handleClick = (e) => {
        indicatorRef.current.style.top = `${
            e.target.getBoundingClientRect().top
        }px`;
    };

    return (
        <div>
            <aside className="sidebar">
                <div className="sidebar__wrap">
                    <div className="logo">
                        <Link to="/">
                            <i className="fa-solid fa-video"></i>
                        </Link>
                    </div>
                    <ul className="sidebar__nav">
                        <li
                            ref={indicatorRef}
                            className="indicator hidden"
                        ></li>
                        {sidebarNav.map((link, idx) => (
                            <li
                                key={idx}
                                onClick={handleClick}
                                ref={idx === active ? activeLink : null}
                            >
                                <Link
                                    to={link.path}
                                    className={`${
                                        idx === active ? "active" : ""
                                    }`}
                                >
                                    <i className={link.icon}></i>
                                    {link.display}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
