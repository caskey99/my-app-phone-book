import React from 'react';
import logo from "../assets/img/logo.png";
import PostFilter from "./PostFilter";

const Navbar = ({filter, setFilter, setModalForm}) => {
    return (
        <nav className="navbar">
            <div className="navbar-search">
                <form className="form-search">
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    {/*<input className="form-control-search" type="search" placeholder="Поиск" aria-label="Search"/>*/}
                </form>
            </div>
            <div className="navbar-section">
                <div className="navbar-item-logo">
                    <a href="#" onClick={() => setModalForm(true)}> <img src={logo} alt='logo'/> </a>
                </div>
                <div className="navbar-item-heading">
                    <a href="#">Имя</a>
                </div>
                <div className="navbar-item-heading">
                    <a href="#"><p>Телефон</p></a>
                </div>
                <div className="navbar-item-heading">
                    <a href="#">Адрес</a>
                </div>
                <div className="navbar-item-heading">
                    <a href="#">Электронная почта</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;