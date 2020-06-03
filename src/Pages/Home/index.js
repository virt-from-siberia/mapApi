//external
import React from "react";

//material
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

//internal
import NavBar from "@/components/NavBar";
import iconEarch from "@/img/logos/logo1.png";
import comparison from "@/img/logos/comparison.svg";
import compliance from "@/img/logos/compliance.svg";
import laptopImage from "@/img/laptop.png";
import platforms from "@/img/logos/platforms.svg";
import graphics from "@/img/graphics.jpg";
import terrains from "@/img/terrains.png";

const Home = () => {
    return (
        <>
            <section className='home'>
                <NavBar />
                <section className='home__header'>
                    <div className='home__header-about '>
                        <div className='company-logo'>
                            <img src={iconEarch} alt='logo' />
                            <h1>
                                <span>ГЕО</span> <br />
                                СИСТЕМА
                            </h1>
                        </div>
                        <div className='company-text'>
                            <h2>Цифровая пплатформа для фермеров</h2>
                            <p>
                                Мы предоставляем широкий спектр возможностей для
                                вашего бизнеса
                            </p>
                            <Button
                                variant='contained'
                                color='primary'
                                className=''
                            >
                                Подключится к сервису
                            </Button>
                        </div>
                    </div>
                </section>
                <section className='home__body'>
                    <div className='home__body-about'>
                        <div className='about-item'>
                            <img src={comparison} alt='' />
                            <div className='about-item-body'>
                                <h4>ЗАГОЛОВОК</h4>
                                <p>
                                    Многие думают, что Lorem Ipsum - взятый с
                                    потолка псевдо-латинский набор слов, но это
                                    не совсем так. Его корни уходят в один
                                    фрагмент классической латыни 45 года н.э.,
                                    то есть более двух тысячелетий назад. Ричард
                                </p>
                            </div>
                        </div>
                        <div className='about-item'>
                            <img src={compliance} alt='' />
                            <div className='about-item-body'>
                                <h4>ЗАГОЛОВОК</h4>
                                <p>
                                    Многие думают, что Lorem Ipsum - взятый с
                                    потолка псевдо-латинский набор слов, но это
                                    не совсем так. Его корни уходят в один
                                    фрагмент классической латыни 45 года н.э.,
                                    то есть более двух тысячелетий назад. Ричард
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='home__body-middle '>
                        <div className='middle-graphics'>
                            <img src={graphics} alt='' />
                        </div>
                        <div className='middle-text'>
                            <img src={platforms} alt='' />
                            <h4>ЭЛЕКТРОННАЯ ОТЧЕТНОСТЬ</h4>
                            <p>
                                Многие думают, что Lorem Ipsum - взятый с
                                потолка псевдо-латинский набор слов, но это не
                                совсем так. Его корни уходят в один Многие
                                думают, что Lorem Ipsum - взятый с потолка
                            </p>
                        </div>
                    </div>
                    <div className='home__body-bottom'>
                        <div className='block container'>
                            <div className='block__left'>
                                <img src={laptopImage} alt='' />
                            </div>
                            <div className='block__right'>
                                <h3>Цифровая карта вашей фермы</h3>
                                <div className='block__right-item'>
                                    <i className='check circle outline icon'></i>
                                    <p>
                                        Контролируйте свои поля удаленно
                                        Получайте регулярно обновляемый анализ
                                        спутниковых снимков
                                    </p>
                                </div>
                                <div className='block__right-item'>
                                    <i className='check circle outline icon'></i>
                                    <p>
                                        Сократите потерю урожая, обнаружив и
                                        решив проблемы раньше.
                                    </p>
                                </div>
                                <div className='block__right-item'>
                                    <i className='check circle outline icon'></i>
                                    <p>
                                        Все доступно на вашем компьютере
                                        ноутбуке или телефоне.
                                    </p>
                                </div>
                                <div className='block__right-item'>
                                    <i className='check circle outline icon'></i>
                                    <p>
                                        Комплексное решение, которое поможет вам
                                        управлять вашей фермой в течение всего
                                        сезона.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home__footer'>
                    <div className='home__footer-top'>
                        <div className='footer-text'>
                            <h3>Загружай свои снимки</h3>
                            <p>
                                Lorem Ipsum - взятый с потолка псевдо-латинский
                                набор словы набор словы набор словы
                            </p>
                        </div>
                        <img class='terrin' src={terrains} alt='' />
                    </div>

                    <div id='stripes'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='footer-bottom'></div>
                </section>
            </section>
        </>
    );
};

export default Home;
