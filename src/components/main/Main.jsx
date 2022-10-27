import React, { useState } from 'react';
import MenuMain from '../../assets/menu-main.svg';
import MenuSearch from '../../assets/menu-search.svg';
import MenuTable from '../../assets/menu-table.svg';
import MenuCalendar from '../../assets/menu-calendar.svg';
import MenuCards from '../../assets/menu-cards.svg';
import MenuWidgets from '../../assets/menu-widgets.svg';
import MenuSettings from '../../assets/menu-settings.svg';
import MenuExit from '../../assets/menu-exit.svg';
import MenuProfile from '../../assets/menu-profile.svg';
import MenuFinance from '../../assets/menu-finance.svg';
import './main.css';

import Home from '../home/Home';
import Search from '../search/Search';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Menu = () => {
    const [Toggle, showSubMenu] = useState(false);
    const [ToggleMenu, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#main');
    return (
        <>
            <Router>
                <main className="flex">
                    <section className="menu">
                        <nav className={ToggleMenu ? 'menu__nav menu__nav-active' : 'menu__nav '}>
                            <h1 className="nav__title">Меню</h1>
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link
                                        to="/"
                                        onClick={() => setActiveNav('#main')}
                                        className={
                                            activeNav === '#main' ? 'nav__link nav__item-active flex' : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuMain} alt="" />
                                        </div>
                                        Главная
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <Link
                                        to="/address"
                                        onClick={() => setActiveNav('#search')}
                                        className={
                                            activeNav === '#search'
                                                ? 'nav__link nav__item-active flex'
                                                : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuSearch} alt="" />
                                        </div>
                                        Поиск адресов
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#table"
                                        onClick={() => setActiveNav('#table')}
                                        className={
                                            activeNav === '#table'
                                                ? 'nav__link nav__item-active flex'
                                                : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuTable} alt="" />
                                        </div>
                                        Таблицы
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#calendar"
                                        onClick={() => setActiveNav('#calendar')}
                                        className={
                                            activeNav === '#calendar'
                                                ? 'nav__link nav__item-active flex'
                                                : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuCalendar} alt="" />
                                        </div>
                                        Календарь
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#cards"
                                        onClick={() => setActiveNav('#cards')}
                                        className={
                                            activeNav === '#cards'
                                                ? 'nav__link nav__item-active flex'
                                                : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuCards} alt="" />
                                        </div>
                                        Карты
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#widgets"
                                        onClick={() => setActiveNav('#widgets')}
                                        className={
                                            activeNav === '#widgets'
                                                ? 'nav__link nav__item-active flex'
                                                : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuWidgets} alt="" />
                                        </div>
                                        Виджеты
                                    </a>
                                </li>
                                <li className="nav__item">
                                    <div className="nav__sub flex">
                                        <a href="#settings" className="nav__link flex">
                                            <div className="nav__link-logo">
                                                <img src={MenuSettings} alt="" />
                                            </div>
                                            Настройки
                                        </a>
                                        <div
                                            className={Toggle ? 'nav__arrow nav__arrow-active' : 'nav__arrow '}
                                            onClick={() => showSubMenu(!Toggle)}
                                        ></div>
                                    </div>
                                    <ul className={Toggle ? 'nav__sub-list nav__sub-list-active' : 'nav__sub-list'}>
                                        <li>
                                            <a
                                                href="#profile"
                                                onClick={() => setActiveNav('#profile')}
                                                className={
                                                    activeNav === '#profile'
                                                        ? 'nav__sub-link nav__item-active flex'
                                                        : 'nav__sub-link flex'
                                                }
                                            >
                                                <div className="nav__sub-link-logo">
                                                    <img src={MenuProfile} alt="" />
                                                </div>
                                                Настройки профиля
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#finance"
                                                onClick={() => setActiveNav('#finance')}
                                                className={
                                                    activeNav === '#finance'
                                                        ? 'nav__sub-link nav__item-active flex'
                                                        : 'nav__sub-link flex'
                                                }
                                            >
                                                <div className="nav__sub-link-logo">
                                                    <img src={MenuFinance} alt="" />
                                                </div>
                                                Управление финансами
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav__item">
                                    <a
                                        href="#exit"
                                        onClick={() => setActiveNav('#exit')}
                                        className={
                                            activeNav === '#exit' ? 'nav__link nav__item-active flex' : 'nav__link flex'
                                        }
                                    >
                                        <div className="nav__link-logo">
                                            <img src={MenuExit} alt="" />
                                        </div>
                                        Выход
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className={ToggleMenu ? 'header__menu-icon header__menu-icon-active' : 'header__menu-icon '}
                            onClick={() => showMenu(!ToggleMenu)}
                        >
                            <span></span>
                        </div>
                    </section>
                    <Routes>
                        <Route path="/address" element={<Search />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </main>
            </Router>
        </>
    );
};
export default Menu;
