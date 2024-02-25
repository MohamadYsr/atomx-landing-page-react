import React from "react";
import Nav from "./components/nav/nav.jsx";
import Styles from './app.module.css';
import Home from "./components/homeSection/homeSection.jsx";
import About from "./components/aboutSection/aboutSection.jsx";
import Services from "./components/servicesSection/services.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
    return (
        <div className={Styles.container}>
            <Nav />
            <Home />
            <About />
            <Services />
            <Footer />
        </div>
    )
}

export default App;