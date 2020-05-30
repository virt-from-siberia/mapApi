//external
import React from "react";

//internal
import NavBar from "@/components/NavBar";
import iconEarch from "@/img/logos/logo1.png";
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
                            <button class='ui green button'>
                                Подключится к сервису
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
