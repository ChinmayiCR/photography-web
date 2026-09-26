import React from 'react';
import {Contact, Features, Footer, Gallery, Main, NavBar} from "./index.js";

const MainPage = () => {
    return (
        <div className="min-h-screen bg-ivory">
            <header className="sticky top-0 z-50 border-b border-[#d8d1c7] bg-[#f6f3ee]/95 backdrop-blur">
                <NavBar/>
            </header>
            <main>
                <div className="relative min-h-[690px] bg-[url(./assets/background.png)] bg-cover bg-center">
                    <div className="absolute inset-0 bg-[#27251f]/35" />
                    <div className="relative mx-auto flex min-h-[690px] max-w-[1440px] items-end px-6 pb-16 sm:px-12 sm:pb-20 lg:px-20">
                        <Main/>
                    </div>
                </div>
                <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
                    <Gallery/>
                    <Features/>
                    <Contact/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;
