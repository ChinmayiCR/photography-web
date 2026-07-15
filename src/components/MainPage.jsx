import React from 'react';
import styles from "../style.js";
import {Contact, Features, Footer, Gallery, Main, NavBar} from "./index.js";

const MainPage = () => {
    return (
        <div className="min-h-screen bg-paper text-ink">
            <div className="relative overflow-hidden">
                <div className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 shadow-sm backdrop-blur">
                    <div className={`${styles.boxWidth} ${styles.paddingX}`}>
                        <NavBar/>
                    </div>
                </div>

                <section className={`${styles.paddingX} ${styles.flexCenter} min-h-screen bg-white pt-28`}>
                    <div className={`${styles.boxWidth}`}>
                        <Main/>
                    </div>
                </section>

                <section className={`bg-neutral-50 ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Gallery/>
                        </div>
                </section>

                <section className={`bg-white ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Features/>
                    </div>
                </section>

                <section className={`bg-neutral-50 ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Contact/>
                    </div>
                </section>

                <Footer/>

            </div>
        </div>
    );
};

export default MainPage;
