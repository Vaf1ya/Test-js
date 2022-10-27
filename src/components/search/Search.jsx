import React, { useState } from 'react';
import './search.css';
import SearchIcon from '../../assets/search-button-icon.svg';

const Search = () => {
    const [address, setAddress] = useState('');

    var url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    var token = 'f89d2c3e8916d44dc52dcf7e0e3af27202b28e05';
    const query = address;

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + token,
        },
        body: JSON.stringify({ query: query }),
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((result) => console.log(result));

    return (
        <section className="section">
            <div className="section__container">
                <h1 className="section__title">Поиск адресов</h1>
                <span className="section__sub-title">Введите интересующий вас адрес</span>
                <div className="container__content">
                    <div className="content__search flex">
                        <input
                            type="text"
                            className="search__input"
                            placeholder="Введите интересующий вас адрес"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <a href="#adsfsdf" className="button">
                            <img src={SearchIcon} alt="" className="search__icon" />
                            Поиск
                        </a>
                    </div>
                    <div className="content__address">
                        <h1 className="address_title">Адреса</h1>
                        <div className="address__text">
                            <a href="#dfsfs">город Москва, улица Ленина 13, дом 32</a>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
