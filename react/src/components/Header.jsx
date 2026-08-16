// Header.jsx
import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";

function Header({ searchTerm, onSearchChange }) {
    return (
        <header>
            <h1>
                <a href="/">
                    <img src={logo} alt="サイトロゴ" />
                    <span>Hototogisu</span>
                </a>
            </h1>
            <form
                onSubmit={(e) => e.preventDefault()} // ページ遷移防止
                className="search-form"
            >
                <input
                    type="text"
                    placeholder="検索"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-input"
                    autoComplete="off"
                />
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="検索" />
                </button>
            </form>
        </header>
    );
}

export default Header;
