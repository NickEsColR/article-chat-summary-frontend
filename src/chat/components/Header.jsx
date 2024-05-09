import React from "react";

export const Header = () => {
    return (
        <nav
            className="navbar border-bottom col-9"
            style={{ position: "fixed", top: 0, zIndex: 1000 }}
        >
            <span className="navbar-brand">&nbsp;&nbsp;&nbsp;Articulo 1</span>
            <span className="navbar-text btn">
                <i class="fa-regular fa-eye"></i>&nbsp; Summary
            </span>
        </nav>
    );
};
