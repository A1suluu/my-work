import React from 'react';
import './home.css';

export default function Home () {
    return (
        <div>
            <h1 className='home_titile'>Здравствуйте Александр,</h1>
            <p className='home_desc'>В этом письме мы выслали Вам логин и пароль от сервиса.</p>
            <div className='home_video'>
                <div className='h_advDiv'>
                    <div className='h_advDiv2'></div>
                    <div className='home_advButton'></div>
                </div>
            </div>
            <h1 className='home_titile'>Смотреть видео</h1>
            <p className='home_desc'>Логин: 239493249</p>
            <p className='home_desc'>Пароль: dsk%34kf</p>
            <button className='home_button'>Перейти на сайт</button>
        </div>
    )
}