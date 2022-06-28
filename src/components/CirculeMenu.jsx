import React from 'react';
import up from "../assets/img/circule/up.png";
import right from "../assets/img/circule/right.png";
import down from "../assets/img/circule/down.png";
import left from "../assets/img/circule/left.png";

const CirculeMenu = ({setModalForm, setModalMenu}) => {
    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <a className="menu-link" onClick={() => {setModalForm(true); setModalMenu(false);}}>
                        <img className="menu-img" src={up} alt='up'/>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="" onClick={() => alert("Пока нельзя:(")}>
                        <img className="menu-img" src={right} alt='right'/>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="" onClick={() => alert("Пока нельзя:(")}>
                        <img className="menu-img" src={down} alt='down'/>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="" onClick={() => alert("Пока нельзя:(")}>
                        <img className="menu-img" src={left} alt='left'/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CirculeMenu;