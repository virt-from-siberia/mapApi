//external
import React from "react";

//internal
import NavBar from "@/components/NavBar";
import iconEarch from "@/img/logos/logo1.png";
import laptopImage from "@/img/laptop.png";
// import videoBg from "@/img/video/1/video.mp4";

const Home = () => {
    return (
        <>
            <div className='home'>
                <NavBar />
                <div className='home__header'>
                    {/* <video autoplay='true' playsinline>
                        <source src={videoBg} type='video/mp4' />
                    </video> */}
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
                            <button className='ui green button'>
                                Подключится к сервису
                            </button>
                        </div>
                    </div>
                </div>
                <div className='home__body'>
                    <div className='home__body-about'>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente, voluptate deleniti. Voluptatibus
                            assumenda laboriosam velit, amet nemo possimus.
                            Recusandae ipsa nostrum quos ipsam fugit, inventore
                            molestias cupiditate similique laudantium odio.
                        </h3>
                    </div>
                    <div className='home__body-middle'></div>
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
                </div>
            </div>
        </>
    );
};

export default Home;
