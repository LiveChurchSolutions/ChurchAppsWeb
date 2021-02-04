import React from "react";
import "./Home.css";
import { Footer, Header } from "./components"
import { HomeRegister } from "./components/HomeRegister"
import { HomeHero } from "./components/HomeHero"

export const Home = () => {
    return (
        <>
            <Header />
            <HomeHero />

            <HomeRegister />
            <Footer />
        </>
    );
}
